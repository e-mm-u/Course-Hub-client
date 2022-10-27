// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// apiKey: "AIzaSyDIqqzBMETRdrAPA5M3dnBJk5O0Np0N-ps",
// authDomain: "course-hub-69d38.firebaseapp.com",
// projectId: "course-hub-69d38",
// storageBucket: "course-hub-69d38.appspot.com",
// messagingSenderId: "719167481808",
// appId: "1:719167481808:web:19e59b3a149eb60b9c7bd5"

// apiKey: process.env.REACT_APP_authDomain ,
// authDomain: process.env.REACT_APP_apiKey ,
// projectId: process.env.REACT_APP_projectId ,
// storageBucket: process.env.REACT_APP_storageBucket ,
// messagingSenderId: process.env.REACT_APP_messagingSenderId ,
// appId: process.env.REACT_APP_appId 