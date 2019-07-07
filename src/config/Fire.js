import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDYTMSXcQ_VRo3REDj1a22iRdcIm7VNS2c",
    authDomain: "blog-posting-e1c59.firebaseapp.com",
    databaseURL: "https://blog-posting-e1c59.firebaseio.com",
    projectId: "blog-posting-e1c59",
    storageBucket: "",
    messagingSenderId: "93791463758",
    appId: "1:93791463758:web:39c78461fc9b8ab1"
  };
  const fire=firebase.initializeApp(config);
  export default fire;