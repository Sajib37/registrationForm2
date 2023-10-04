import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBCMZFiOZl8-gpd_PG7Os9b9wHAGIOnZcQ",
  authDomain: "registration-from2.firebaseapp.com",
  projectId: "registration-from2",
  storageBucket: "registration-from2.appspot.com",
  messagingSenderId: "172883240140",
  appId: "1:172883240140:web:9177a84a14e12f0d188e69"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
