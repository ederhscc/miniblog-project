import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBcbDdXHnQLZcCq1-jS_-P4w2JkE08TpCc",
  authDomain: "my-miniblog-1c735.firebaseapp.com",
  projectId: "my-miniblog-1c735",
  storageBucket: "my-miniblog-1c735.appspot.com",
  messagingSenderId: "289159485814",
  appId: "1:289159485814:web:4da86cba60ea2babdc8257",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
