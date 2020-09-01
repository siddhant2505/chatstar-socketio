import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDv6MnNHuSU2cy0NqN03zNZaxrmw35yhY",
  authDomain: "chatstar-d4477.firebaseapp.com",
  databaseURL: "https://chatstar-d4477.firebaseio.com",
  projectId: "chatstar-d4477",
  storageBucket: "chatstar-d4477.appspot.com",
  messagingSenderId: "119374473921",
  appId: "1:119374473921:web:941cca93f6bd3a02830240",
  measurementId: "G-SFD94GT07C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();

export { auth, provider, fbProvider };
export default db;
