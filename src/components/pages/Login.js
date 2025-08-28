//import the firebaseconfig file
import React from "react";
import { useState } from "react";
import { auth, provider, db } from "../../firebaseConfig";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import applicationData from "../../model/Application";
import { ClipLoader } from "react-spinners";
import Navbar from "../shared/NavbarAlt";
import Footer from "../shared/Footer";

const Login = () => {
  const [loading, setLoading] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //redirect to application page
      //window.location.href = "/apply";
    }
  });
  const handleButtonClick = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const q = query(
          collection(db, "applications"),
          where("uid", "==", user.uid)
        );

        getDocs(q)
          .then(async (querySnapshot) => {
            if (querySnapshot.empty) {
              await addDoc(collection(db, "applications"), applicationData);
            }
          })
          .catch((error) => {
            console.log(error.message);
          });

        window.location.href = "/apply";
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };
  return (
    <div className="login">
      <div className="container">
        <Navbar />
        <h1 className="login-title">Your Hoyalytics journey starts here.</h1>
        <p className="login-subtitle">
          Fall 2023 applications are now OPEN. Click the button below to log in
          with your google account.
        </p>
        <div className="login-content">
          <button onClick={handleButtonClick}>Login</button>
          {loading && (
            <ClipLoader color="#072f5f" loading={loading} size={32} />
          )}
          {loading && <p>Waiting for you to sign in... </p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
