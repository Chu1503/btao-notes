import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyByAIwZ88asvm84w_ECXhEJMDVJ6C0-tNk",
    authDomain: "btao-notes.firebaseapp.com",
    databaseURL: "https://btao-notes-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "btao-notes",
    storageBucket: "btao-notes.appspot.com",
    messagingSenderId: "593329125051",
    appId: "1:593329125051:web:22bf4cd730e2a0ca6e5b9e"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };