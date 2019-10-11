// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD7ywm3xDLxqEKB4K5lcS2BAoC9J4RPxKg",
    authDomain: "students-log.firebaseapp.com",
    databaseURL: "https://students-log.firebaseio.com",
    projectId: "students-log",
    storageBucket: "students-log.appspot.com",
    messagingSenderId: "94420250378",
    appId: "1:94420250378:web:762aee6a074103e4d354f3"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// get a reference to the database service
var database = firebase.database();

export { firebase, database }
