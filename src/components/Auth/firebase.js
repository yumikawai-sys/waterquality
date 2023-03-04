import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1w9rT_hVo-cOwCe7Q1cbfhv2stAW0L54",
  authDomain: "finalproject-188b3.firebaseapp.com",
  projectId: "finalproject-188b3",
  storageBucket: "finalproject-188b3.appspot.com",
  messagingSenderId: "718011140494",
  appId: "1:718011140494:web:f6f5b4cc42f2ecb1797cdf"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {auth,app,db}