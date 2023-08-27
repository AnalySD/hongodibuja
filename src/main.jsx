import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBvn7SCH1uzu0iAN-T-jCgoHOyfSIEZ8I",
  authDomain: "hongo-dibuja.firebaseapp.com",
  projectId: "hongo-dibuja",
  storageBucket: "hongo-dibuja.appspot.com",
  messagingSenderId: "555725303025",
  appId: "1:555725303025:web:da76c5cac5d541f4ea4d50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(

      <ChakraProvider>

            <App />

      </ChakraProvider>
  
)
