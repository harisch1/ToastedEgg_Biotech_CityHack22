import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmTUffHmqEDFhfe7ta9qJQglJ5GTP5Cv4",
  authDomain: "studybuddy-23b0f.firebaseapp.com",
  projectId: "studybuddy-23b0f",
  storageBucket: "studybuddy-23b0f.appspot.com",
  messagingSenderId: "349356323252",
  appId: "1:349356323252:web:b1a1704fb4f3160281c2e1",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
