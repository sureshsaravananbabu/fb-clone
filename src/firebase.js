import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAHO6b1cOLd0cNGKhbJY8T_yBlQj59IGDE",
    authDomain: "facebook-clone-6cdb0.firebaseapp.com",
    projectId: "facebook-clone-6cdb0",
    storageBucket: "facebook-clone-6cdb0.appspot.com",
    messagingSenderId: "1004824196400",
    appId: "1:1004824196400:web:6214444bb03923e27204f5",
    measurementId: "G-X04YFFKJWS"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export { auth,provider };
export default db;