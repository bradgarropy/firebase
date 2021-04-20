import firebase from "firebase/app"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyCracDkxQBNVOyd0dOWSZsVaZJzPX9oauM",
  authDomain: "fir-setup-dry-run.firebaseapp.com",
  projectId: "fir-setup-dry-run",
  storageBucket: "fir-setup-dry-run.appspot.com",
  messagingSenderId: "617438938243",
  appId: "1:617438938243:web:bbf88fd29abb9e1a54c7b6",
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const firestore = firebase.firestore()

export { firestore }
