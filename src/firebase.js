import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA472ugUL_an4i9sAfgBlcdIbW6tkyicic",
  authDomain: "react-website-1534f.firebaseapp.com",
  projectId: "react-website-1534f",
  storageBucket: "react-website-1534f.appspot.com",
  messagingSenderId: "359551067478",
  appId: "1:359551067478:web:13c7b45d4973f41c51a2f7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;