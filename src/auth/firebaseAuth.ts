import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDZssnOh-PxdgPrAewbpby3ulbyVqitqWY',
  authDomain: 'alura-geek-react.firebaseapp.com',
  projectId: 'alura-geek-react',
  storageBucket: 'alura-geek-react.appspot.com',
  messagingSenderId: '639589321517',
  appId: '1:639589321517:web:5b6ace6005f48e45f261a4',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
