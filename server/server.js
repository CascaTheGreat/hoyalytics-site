const express = require("express");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require("google-auth-library");
const path = require("path");
const nodemailer = require("nodemailer");
const cors = require("cors");

//create the express app
const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "..", "build");

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
    user: "reeduhlik@gmail.com",
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

//used to authenticate with the google sheets api
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;

app.post("/addNetID", async (req, res) => {
  const { netID } = req.body;

  if (!netID) {
    return res.status(400).json({ message: "NetID is required" });
  }

  console.log("GOT ID: " + netID);

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);

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
    from: "reeduhlik@gmail.com",
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
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(
    `Server running on port ${port}.  Files served from ${publicPath}`,
  );
});
