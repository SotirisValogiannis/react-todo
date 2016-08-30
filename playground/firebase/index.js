import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCOv4bBSJQdyQyJfYJ5njrd2tNyTiAppkw",
  authDomain: "todo-app-sotiris.firebaseapp.com",
  databaseURL: "https://todo-app-sotiris.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0',
  },
  isRunning: true,
  user: {
    name: 'Sotiris',
    age: 30
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot)=> {
  console.log('todo added', snapshot.key, snapshot.val());
})

todosRef.push({
  text: 'Run!'
});
todosRef.push({
  text: 'Read!'
});
