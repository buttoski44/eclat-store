import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCycDxdX4UWeIvv_fsH9HC0pB7ge76HZqk",
    authDomain: "eclat-db.firebaseapp.com",
    projectId: "eclat-db",
    storageBucket: "eclat-db.appspot.com",
    messagingSenderId: "443899029755",
    appId: "1:443899029755:web:fda520f8b364128f0fe85e",
    measurementId: "G-S5RCN06ZZ3"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;