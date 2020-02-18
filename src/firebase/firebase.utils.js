import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyB_Na8VcMWBPxy6NX5S2HduHJ4dRvyWMN0",
  authDomain: "crown-db-bf1fa.firebaseapp.com",
  databaseURL: "https://crown-db-bf1fa.firebaseio.com",
  projectId: "crown-db-bf1fa",
  storageBucket: "crown-db-bf1fa.appspot.com",
  messagingSenderId: "506347412135",
  appId: "1:506347412135:web:4d70402c02235e000bd982",
  measurementId: "G-4E9R0WBY8J"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase