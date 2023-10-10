// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfG9KT5bYtXWxQkC6EOUSJ0lom4RbQCPA",
  authDomain: "cafeitem-a4703.firebaseapp.com",
  projectId: "cafeitem-a4703",
  storageBucket: "cafeitem-a4703.appspot.com",
  messagingSenderId: "791144031786",
  appId: "1:791144031786:web:f529834301962c84920553",
  measurementId: "G-CMM25KCD8C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);