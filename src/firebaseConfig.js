// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "A_TUA_API_KEY",
  authDomain: "O_TEU_DOMINIO.firebaseapp.com",
  projectId: "O_TEU_PROJECT_ID",
  storageBucket: "O_TEU_BUCKET",
  messagingSenderId: "O_TEU_SENDER_ID",
  appId: "A_TUA_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
