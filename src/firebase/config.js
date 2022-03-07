import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB63QCJp867niYg2FuPbukdkJaf2yMsFBg",
    authDomain: "visualapp-54a77.firebaseapp.com",
    projectId: "visualapp-54a77",
    storageBucket: "visualapp-54a77.appspot.com",
    messagingSenderId: "638867657910",
    appId: "1:638867657910:web:701a7ff3d127587ec28217"
  };

//   init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

export { projectFirestore, projectAuth, projectStorage }