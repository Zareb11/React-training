import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCnXkRDy7c-2mpOafGpMUtWmCD78FlO0dI",
    authDomain: "react-getting-started-c999e.firebaseapp.com",
    databaseURL: "https://react-getting-started-c999e-default-rtdb.firebaseio.com",
    projectId: "react-getting-started-c999e",
    storageBucket: "react-getting-started-c999e.appspot.com",
    messagingSenderId: "889241723540",
    appId: "1:889241723540:web:3ed521791ea777a96eca81",
    measurementId: "G-D0W8K1LQGS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
