import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAlS0Xl5grtGLsbyZ_7zci1ObuR1xC3rrY",
    authDomain: "bebidio-app.firebaseapp.com",
    projectId: "bebidio-app",
    storageBucket: "bebidio-app.appspot.com",
    messagingSenderId: "266323584933",
    appId: "1:266323584933:web:7c320a23f980c7cadbea4c",
    measurementId: "G-MQ4G732QPX"
 };

 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 export { db };
 
