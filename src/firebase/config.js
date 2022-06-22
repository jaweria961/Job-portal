// Import the functions you need from the SDKs you need
import app  from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAEj5BmId-4jR-rSBzEiCIvYl-HJVT1Cms",
  authDomain: "job-listing-3a9bb.firebaseapp.com",
  projectId: "job-listing-3a9bb",
  storageBucket: "job-listing-3a9bb.appspot.com",
  messagingSenderId: "833290367160",
  appId: "1:833290367160:web:a0218398db504287a7c44d"
};



const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();


export {firebase , firestore, app};
