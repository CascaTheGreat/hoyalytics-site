import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyBStqM3_0BGdN2LhDxz9Y6JhOLtCaAsagg",
  authDomain: "hoyalytics.firebaseapp.com",
  projectId: "hoyalytics",
  storageBucket: "hoyalytics.appspot.com",
  messagingSenderId: "176813521012",
  appId: "1:176813521012:web:606cd39d7bad90f524f921",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const getUpdates = async (applicationID) => {
  //select all docs from updates collection where uid = uid
  const updatesRef = collection(db, "updates");
  const q = query(updatesRef, where("applicationID", "==", applicationID));
  const querySnapshot = await getDocs(q);
  const updates = querySnapshot.docs.map((doc) => doc.data());
  console.log(updates);
  return updates;
};

export { app, auth, provider, db, getUpdates };
