import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseInit from "../firebase.init";
firebaseInit();
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

const GoogleSignIn = () => {
    // const [data, setData] = useState({});
    let userData;
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            userData = result.user;
            console.log(userData);
        })

    // console.log(data)
    return userData;
}


const createUser = (email, password) => {
    let response;
    let error;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            response = userCredential.user;
            // ...
        })
        .catch((error) => {
            error = error.message;
            // ..
        });

    return [response, error];
}

export { createUser, GoogleSignIn };