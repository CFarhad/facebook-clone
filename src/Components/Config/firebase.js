import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDZaJXmAtEINpqU89JRCdoRSwQItcI0b8",
  authDomain: "facebook-clone-bd0a9.firebaseapp.com",
  projectId: "facebook-clone-bd0a9",
  storageBucket: "facebook-clone-bd0a9.appspot.com",
  messagingSenderId: "577486977168",
  appId: "1:577486977168:web:060901a5ea5f93b4808015",
  measurementId: "G-W7FHPE0V7Y"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebaseapp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider}
export default db;