import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAg7EUn8xqycszSrHGYXy0N4tCvxECIKfU",
    authDomain: "project-67-23b3c.firebaseapp.com",
    databaseURL: "https://project-67-23b3c-default-rtdb.firebaseio.com",
    projectId: "project-67-23b3c",
    storageBucket: "project-67-23b3c.appspot.com",
    messagingSenderId: "959917309922",
    appId: "1:959917309922:web:1989852d012a5c09d903
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();