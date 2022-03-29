import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCycDxdX4UWeIvv_fsH9HC0pB7ge76HZqk",
  authDomain: "eclat-db.firebaseapp.com",
  projectId: "eclat-db",
  storageBucket: "eclat-db.appspot.com",
  messagingSenderId: "443899029755",
  appId: "1:443899029755:web:fda520f8b364128f0fe85e",
  measurementId: "G-S5RCN06ZZ3",
};

export const creatUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // console.log(firestore.doc("users/hfv54vt7"));

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // .get() method return snapshot object which has exist property

  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
