import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtVMMBBJkVXtDSnO3cMbHydAM2Qx7BbXw",
  authDomain: "jannabi-faniste.firebaseapp.com",
  projectId: "jannabi-faniste",
  storageBucket: "jannabi-faniste.appspot.com",
  messagingSenderId: "828600296537",
  appId: "1:828600296537:web:802f41c9e0302ecfd83d48",
  measurementId: "G-9BS428GN9Y",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
