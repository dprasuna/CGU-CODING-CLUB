import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBcyfDLwjeH5Cb8vYQnWZRtijOEg8YZc20",
  authDomain: "firechat-7a550.firebaseapp.com",
  projectId: "firechat-7a550",
  storageBucket: "firechat-7a550.appspot.com",
  messagingSenderId: "90784482361",
  appId: "1:90784482361:web:08bea417876c9f0866b9e8",
  measurementId: "G-WBJ5ZK3WDR"
};

export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth();
