import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAFdp9RG1li-A8TQYs7EU8v3ilTmi_jGL4',
  authDomain: 'dendro-genreggal.firebaseapp.com',
  databaseURL: 'https://dendro-genreggal.firebaseio.com',
  projectId: 'dendro-genreggal',
  storageBucket: 'dendro-genreggal.appspot.com',
  messagingSenderId: '508512386876',
  appId: '1:508512386876:web:17ab4f400be0a19a',
});

const db = firebaseApp.firestore();

export { db };
