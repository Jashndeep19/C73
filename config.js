import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAq5q7EatFXgMdt9q_oK4PDRINe--t4Beg",
    authDomain: "willy-app-dee87.firebaseapp.com",
    projectId: "willy-app-dee87",
    storageBucket: "willy-app-dee87.appspot.com",
    messagingSenderId: "188312034757",
    appId: "1:188312034757:web:6e36aa761757b7ddb27fac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();