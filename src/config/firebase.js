import firebase from "firebase";
import "firebase/database";

// Set Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4bPQvN7r5yGjB_zi0iS8QwX2cza-z-qg",
    authDomain: "nicole-wu-museum-of-mundane.firebaseapp.com",
    projectId: "nicole-wu-museum-of-mundane",
    storageBucket: "nicole-wu-museum-of-mundane.appspot.com",
    messagingSenderId: "1098939536522",
    appId: "1:1098939536522:web:f403287e5ba18df8f30973"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;


