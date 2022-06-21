import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDy-ahf11eteYRB0s11DkzTwcP2ftxM26E",
    authDomain: "green-collecte.firebaseapp.com",
    projectId: "green-collecte",
    storageBucket: "green-collecte.appspot.com",
    messagingSenderId: "885418914995",
    appId: "1:885418914995:web:879a7ea50df75379406cc6"
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app)

export default database;