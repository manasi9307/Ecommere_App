import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    
        apiKey: "AIzaSyCf00eRE2CqFPH4nU7HuDbYbS0t3zq5JAk",
        authDomain: "mern-web.firebaseapp.com",
        databaseURL: "https://mern-web.firebaseio.com",
        projectId: "mern-web",
        storageBucket: "",
        messagingSenderId: "341955760582",
        appId: "1:341955760582:web:7305d9902115e261"
      
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


