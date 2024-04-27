// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzPXKOuGFRkB70YlpGKggkCIa3Z3PM78I",
  authDomain: "woodland-weave-crafts-client.firebaseapp.com",
  projectId: "woodland-weave-crafts-client",
  storageBucket: "woodland-weave-crafts-client.appspot.com",
  messagingSenderId: "385750708430",
  appId: "1:385750708430:web:ea6c0688dbce7b78ec609f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;