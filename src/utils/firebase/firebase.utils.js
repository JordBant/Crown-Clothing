import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {  getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyADlZ7tC3y2yBSoNeBffWTmuGSRnrIJaEw",
  authDomain: "crown-clo-db.firebaseapp.com",
  projectId: "crown-clo-db",
  storageBucket: "crown-clo-db.appspot.com",
  messagingSenderId: "1038664241187",
  appId: "1:1038664241187:web:ef99f5a52f93a4d6ff6196"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore()
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'user', userAuth.uid);

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
}