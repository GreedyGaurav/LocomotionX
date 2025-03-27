import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALaH0L1PC1yCl2bd9pibBE5FJQaSsBcR8",
  authDomain: "locomotionx-93bcf.firebaseapp.com",
  projectId: "locomotionx-93bcf",
  storageBucket: "locomotionx-93bcf.firebasestorage.app",
  messagingSenderId: "685783242287",
  appId: "1:685783242287:web:e14ab6456038b43d2598da",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
