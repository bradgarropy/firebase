import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAYFixFW2bMvnZkPKhjSnD_bvM0evR-Vug",
  authDomain: "fir-setup-58f19.firebaseapp.com",
  projectId: "fir-setup-58f19",
  storageBucket: "fir-setup-58f19.appspot.com",
  messagingSenderId: "134746620145",
  appId: "1:134746620145:web:3244201db70dfaa4456950",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();

export { firestore };
