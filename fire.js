import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyD0SMf51D5BGHOYi8NDjh-65SEGLxhrzOE",
  authDomain: "mynotepad43.firebaseapp.com",
  databaseURL: "https://mynotepad43.firebaseio.com",
  projectId: "mynotepad43",
  storageBucket: "mynotepad43.appspot.com",
  messagingSenderId: "221318540223",
  appId: "1:221318540223:web:44dc5b6acfc03b871dcf0a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase