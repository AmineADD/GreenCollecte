import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDy-ahf11eteYRB0s11DkzTwcP2ftxM26E",
    authDomain: "green-collecte.firebaseapp.com",
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app)
export const authentification = getAuth(app);
export const storage = getStorage(app);
export default database;