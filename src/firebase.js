// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCiknu_JQ0aYRZueeNpSSRCnIrh8055IYs",
    authDomain: "clone-96765.firebaseapp.com",
    projectId: "clone-96765",
    storageBucket: "clone-96765.appspot.com",
    messagingSenderId: "823280523156",
    appId: "1:823280523156:web:c6db50911c04ea86b8a181",
    measurementId: "G-2PFXDL2R36"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};