
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA3hYDrJjkQooLBxKXnnljeuzNLpAUnM3E",
  authDomain: "authentication-83863.firebaseapp.com",
  projectId: "authentication-83863",
  storageBucket: "authentication-83863.appspot.com",
  messagingSenderId: "702516042029",
  appId: "1:702516042029:web:83bbe4aa6a3d1f4d265ba4",
  measurementId: "G-WQ2E09XYM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to log in a user
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// Function to create a new user
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Function to log out a user
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

export default auth;

