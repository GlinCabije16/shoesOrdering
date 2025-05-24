// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDXyxqkLPJcqmyS0438zIJWifuWD4SFj_0",
    authDomain: "shoeordering-a5279.firebaseapp.com",
    projectId: "shoeordering-a5279",
    storageBucket: "shoeordering-a5279.firebasestorage.app",
    messagingSenderId: "230318539323",
    appId: "1:230318539323:web:e79625db425b0d75c6121e",
    measurementId: "G-LR6TT5C0SX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);

export { storage };
