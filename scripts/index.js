/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
function init() {
    // Initialize Firebase
    // TODO: Replace with your project's customized code snippet
    var config = {
        apiKey: "AIzaSyCrVTABkv3qyrvVZIJZSg_GhlUudo6pdD4",
        authDomain: "palaml-e4773.firebaseapp.com",
        databaseURL: "https://palaml-e4773.firebaseio.com",
        projectId: "palaml-e4773",
        storageBucket: "palaml-e4773.appspot.com",
        messagingSenderId: "209158373491"
    };
    firebase.initializeApp(config);
    console.log("Connected to firebase: " + firebase.app().name);
    var defaultStorage = firebase.app().storage();
    var defaultDatabase = firebase.app().database();
};

init();
