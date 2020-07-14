// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_NRKJzeWyuXd4YVnT6PB7chl0ycopX9I",
    authDomain: "quasey-tasks.firebaseapp.com",
    databaseURL: "https://quasey-tasks.firebaseio.com",
    projectId: "quasey-tasks",
    storageBucket: "quasey-tasks.appspot.com",
    messagingSenderId: "226161089636",
    appId: "1:226161089636:web:03645e6bccfa494ca25371"
};

// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);

export {firebaseApp};
