import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain:  import.meta.env.VITE_AUTH_DOMAIN,
  projectId:  import.meta.env.VITE_PROJECT_ID,
  storageBucket:  import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId:  import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: "1:758471191898:web:606bb12e352030b3c71763"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
