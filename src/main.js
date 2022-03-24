import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VuesticPlugin } from 'vuestic-ui' // <-
import 'vuestic-ui/dist/vuestic-ui.css' // <-
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import store from './store'
import axios from 'axios'


const firebaseConfig = {
  apiKey: "AIzaSyDbyf0T9mybuwPouakqJ0hzk7X4nigEALk",
  authDomain: "semanatec-12cd7.firebaseapp.com",
  projectId: "semanatec-12cd7",
  storageBucket: "semanatec-12cd7.appspot.com",
  messagingSenderId: "883476899634",
  appId: "1:883476899634:web:29f384190ae1d5067f992b"
};

// Initialize Firebase
const app2 = initializeApp(firebaseConfig);
const db = getFirestore(app2)
const provider = new GoogleAuthProvider();
const auth = getAuth();



const app = createApp(App)

app.use(router)
app.use(VuesticPlugin)
app.use(store)
// app.use(axios)

app.mount('#app')

export { db, provider, auth }
