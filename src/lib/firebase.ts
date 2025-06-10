import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLMlzHRk-mBUCfJMFgecJ7LiV1IOvAqSc",
  authDomain: "polymrai-ac729.firebaseapp.com",
  projectId: "polymrai-ac729",
  storageBucket: "polymrai-ac729.firebasestorage.app",
  messagingSenderId: "672589911983",
  appId: "1:672589911983:web:c91f4db82a5b51fa83815a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app; 