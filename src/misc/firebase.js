import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAlmrXto0Xdlprb5tydOCzjDhqSZ2n2wis",
    authDomain: "chat-web-app-9c97d.firebaseapp.com",
    projectId: "chat-web-app-9c97d",
    storageBucket: "chat-web-app-9c97d.appspot.com",
    messagingSenderId: "555238010797",
    appId: "1:555238010797:web:a59b212344c808988cbb24"
  };

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();