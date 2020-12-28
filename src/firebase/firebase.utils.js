import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
  apiKey: 'AIzaSyDKLVZoDch_XHHf2q7-Aw7eIemyX3HWauM',
  authDomain: 'crwn-clothing-db-68fe4.firebaseapp.com',
  projectId: 'crwn-clothing-db-68fe4',
  storageBucket: 'crwn-clothing-db-68fe4.appspot.com',
  messagingSenderId: '42779811061',
  appId: '1:42779811061:web:1217ea8917d54a6bb639bc',
  measurementId: 'G-62PGKG9WK8',
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const database = firebase.database();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default database;
