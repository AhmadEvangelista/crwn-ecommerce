import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var config = {
  apiKey: 'AIzaSyDKLVZoDch_XHHf2q7-Aw7eIemyX3HWauM',
  authDomain: 'crwn-clothing-db-68fe4.firebaseapp.com',
  projectId: 'crwn-clothing-db-68fe4',
  storageBucket: 'crwn-clothing-db-68fe4.appspot.com',
  messagingSenderId: '42779811061',
  appId: '1:42779811061:web:1217ea8917d54a6bb639bc',
  measurementId: 'G-62PGKG9WK8',
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('error creating user ', error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firestore;
