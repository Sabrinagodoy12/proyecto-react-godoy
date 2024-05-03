import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH2l17tjh6zEbmKGWjSfc9_JZl6vj_CKc",
  authDomain: "rayzerk-dce23.firebaseapp.com",
  projectId: "rayzerk-dce23",
  storageBucket: "rayzerk-dce23.appspot.com",
  messagingSenderId: "870404427951",
  appId: "1:870404427951:web:6ab0a0542079230cdfc45a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
