import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCOv4bBSJQdyQyJfYJ5njrd2tNyTiAppkw",
    authDomain: "todo-app-sotiris.firebaseapp.com",
    databaseURL: "https://todo-app-sotiris.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);

} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
