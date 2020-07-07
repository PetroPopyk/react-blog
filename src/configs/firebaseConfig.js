import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLFv1WWz9ZKe1at2wg3E5sImQ7Zc2jTxw",
  authDomain: "react-blog-7b2ad.firebaseapp.com",
  databaseURL: "https://react-blog-7b2ad.firebaseio.com",
  projectId: "react-blog-7b2ad",
  storageBucket: "react-blog-7b2ad.appspot.com",
  messagingSenderId: "224205261998",
  appId: "1:224205261998:web:0fdc4648c066d4066a713f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
export default firebase;
