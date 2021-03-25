import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDNaZCtrZQ09UmTWKxmFDkK1K-_olquaRo",
  authDomain: "live-chat-e2c55.firebaseapp.com",
  projectId: "live-chat-e2c55",
  storageBucket: "live-chat-e2c55.appspot.com",
  messagingSenderId: "376095944591",
  appId: "1:376095944591:web:43180b1be167768c5025fa"
};

//init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }