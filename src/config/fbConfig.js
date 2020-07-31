import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: 'AIzaSyDP80KyirvdL1eAvkE4hs2k1fg5cmjWmFk',
  authDomain: 'hoang-nguyen-portfolio.firebaseapp.com',
  databaseURL: 'https://hoang-nguyen-portfolio.firebaseio.com',
  projectId: 'hoang-nguyen-portfolio',
  storageBucket: 'hoang-nguyen-portfolio.appspot.com',
  messagingSenderId: '918432620562',
  appId: '1:918432620562:web:297ce50cc2be97f6faf8cb',
  measurementId: 'G-C22ZK0NDE0',
};

firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
