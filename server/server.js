import express from "express";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { auth } from "google-auth-library";

import nodemailer from "nodemailer";
import cors from "cors";
import path, { join } from "path";
import { fileURLToPath } from "url";
//create the express app
const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const publicPath = join(__dirname, "..", "build");
console.log("Serving files from: ", publicPath);

//allow cross-origin requests (this is used for the web scraping download)
app.use(cors());

//allows us to parse json data from the request body
app.use(express.json());

//serve the static files from the React app
app.use(express.static(publicPath));

//used to send emails for consulting inquiries
//note: This needs to be a personal email, not a Georgetown email because of restrictions
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  auth: {
    user: "ledlowleo@gmail.com",
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

const credsJson = JSON.parse(process.env.CREDS);

const serviceAccountAuth = auth.fromJSON(credsJson);
serviceAccountAuth.scopes = ["https://www.googleapis.com/auth/spreadsheets"];

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;

app.post("/addNetID", async (req, res) => {
  const { netID } = req.body;

  if (!netID) {
    return res.status(400).json({ message: "NetID is required" });
  }

  console.log("GOT ID: " + netID);
  console.log(serviceAccountAuth);

  console.log("Adding ID to Google Sheets");
  const doc = new GoogleSpreadsheet(
    "1IJiL4hvm9dfXA90tCayQ1c-PI8ifR-Z0NxoqdZx8rkg",
    serviceAccountAuth
  );

  try {
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({ NetID: netID });
    res.status(200).json({ message: "Success" });
  } catch (e) {
    console.error("Error: ", e);
    res.status(500).json({ message: "Error adding netID" });
  }
});

app.post("/send", (req, res) => {
  //send email to hoyalytics email and cc the user

  const mailOptions = {
    from: "ledlowleo@gmail.com",
    to: "hoyalytics.clients@gmail.com",
    cc: req.body.email,
    subject: "Consulting Inquiry (From Hoyalytics Website)",
    text: `There has been a new consulting inquiry from the website.  See below for details. \n\n\nName: ${req.body.name} \nEmail: ${req.body.email} \nCompany: ${req.body.company}\n\n\n\nDescription: ${req.body.description}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.get("/download", function (req, res) {
  const file = `${__dirname}/../public/hoyalytics-syllabus.pdf`;
  res.download(file); // Set disposition and send it.
});

app.get("/web-scraper", function (req, res) {
  const file = `${__dirname}/../public/scraper_template.py`;
  res.download(file); // Set disposition and send it.
});

app.get("*", (req, res) => {
  console.log("Serving index.html");
  console.log(publicPath);
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(
    `Server running on port ${port}.  Files served from ${publicPath}`
  );
});
