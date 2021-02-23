const firebase = require ("firebase");
const app = firebase.initializeApp({
    apiKey: "AIzaSyBPVLAvrAs7yClku4xwI1jryli2t1UPCJ8",
    authDomain: "exercicionode.firebaseapp.com",
    databaseURL: "https://exercicionode-default-rtdb.firebaseio.com/",
});

module.exports= app;