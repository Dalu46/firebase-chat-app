import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkBI-GomlfIAnEUUoqziRQDphf3Ex7ct8",
  authDomain: "firevuechat-d6033.firebaseapp.com",
  projectId: "firevuechat-d6033",
  storageBucket: "firevuechat-d6033.appspot.com",
  messagingSenderId: "15831975728",
  appId: "1:15831975728:web:5c2e08affb62234e20aaf5",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get the Firebase Realtime Database instance
const db = getDatabase(firebaseApp);

export default db;
