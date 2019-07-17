import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { async } from 'q';

var config = {
    
        apiKey: "AIzaSyCf00eRE2CqFPH4nU7HuDbYbS0t3zq5JAk",
        authDomain: "mern-web.firebaseapp.com",
        databaseURL: "https://mern-web.firebaseio.com",
        projectId: "mern-web",
        storageBucket: "",
        messagingSenderId: "341955760582",
        appId: "1:341955760582:web:7305d9902115e261"
      
};

export const createUserProfileDoc = async(userAuth, additionalData) => {
if(!userAuth) return;

const userRef=firestore.doc(`users/${userAuth.uid}`);
const snapShot = await userRef.get();

console.log(snapShot);

if(!snapShot.exists){
const {displayName, email} = userAuth;
const createdAt = new Date();

try{
        userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
        })
}catch(error){
     console.log("error",error.message)   
}
}
return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


