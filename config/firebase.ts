// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXdML7wU9coIWjQ_G-LGi07G1PECyk2k0",
  authDomain: "whatsapp-clone-94a8c.firebaseapp.com",
  projectId: "whatsapp-clone-94a8c",
  storageBucket: "whatsapp-clone-94a8c.appspot.com",
  messagingSenderId: "206491594382",
  appId: "1:206491594382:web:70a08e9a686978b33563df"
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { db, auth, provider }
