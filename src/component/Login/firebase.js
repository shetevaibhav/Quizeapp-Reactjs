
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBZQn1wFqP9RTxowPtS9hhq6J0kdSqsRak",
  authDomain: "quize-web-app.firebaseapp.com",
  projectId: "quize-web-app",
  storageBucket: "quize-web-app.appspot.com",
  messagingSenderId: "720349963445",
  appId: "1:720349963445:web:b2ef170cbf3d091f214afc",
  databaseURL:"http://quize-web-app-default-rtdb.firebaseio.com"
};


 export const app = initializeApp(firebaseConfig);