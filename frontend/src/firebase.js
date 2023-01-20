// Import firebase for React
import firebase from "firebase/app";
import "firebase/firestore";

// Firebase Config variables
const firebaseConfig = {
  apiKey: "AIzaSyB0It6TQCpvRkC5TRDJlwblXescLKq3VTo",
  authDomain: "fridge-project-17fab.firebaseapp.com",
  projectId: "fridge-project-17fab",
  storageBucket: "fridge-project-17fab.appspot.com",
  messagingSenderId: "693790225412",
  appId: "1:693790225412:web:52b6b6b5cd5f7eb9bef151",
  measurementId: "G-0NFTLVSPSK",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
