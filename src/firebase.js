import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2LnZ-jr4YSqgILM78WYGiIU3R8OHU8PU",
  authDomain: "todo-project-3414d.firebaseapp.com",
  projectId: "todo-project-3414d",
  storageBucket: "gs://todo-project-3414d.appspot.com",
  messagingSenderId: "1066335680472",
  appId: "1:1066335680472:web:c9dd90b56e29bb164c24ad"
};

export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);