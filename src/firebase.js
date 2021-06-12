import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChAxjk8Nv5pMiDz2fBJdl3xrfdUt9sFCg",
  authDomain: "matts-linkedin-clone.firebaseapp.com",
  projectId: "matts-linkedin-clone",
  storageBucket: "matts-linkedin-clone.appspot.com",
  messagingSenderId: "855802411739",
  appId: "1:855802411739:web:c9df47085a8143c48d2afe",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
