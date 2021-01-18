import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB1nEDNiIAtP1JGlYaA6_Xle1cUmgUPgbY",
    authDomain: "myvideos2304.firebaseapp.com",
    projectId: "myvideos2304",
    storageBucket: "myvideos2304.appspot.com",
    messagingSenderId: "759595337572",
    appId: "1:759595337572:web:5194be4baa466e7c795c71",
    measurementId: "G-JYMXEYX4GZ"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.auth();