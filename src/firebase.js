import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs75F_EDqbDx5fD0aflFAScp3976Mghk8",
  authDomain: "chat-623f4.firebaseapp.com",
  projectId: "chat-623f4",
  storageBucket: "chat-623f4.appspot.com",
  messagingSenderId: "841373934842",
  appId: "1:841373934842:web:06ee59903de44c5d4e1543",
  measurementId: "G-NPKCP1DBSF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
// const analytics = getAnalytics(app);