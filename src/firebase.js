import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCbCb2_T7cZYhCc8R8U6IzK1QbD08b_ckY",
    authDomain: "react-app-dd062.firebaseapp.com",
    databaseURL: "https://react-app-dd062.firebaseio.com",
    projectId: "react-app-dd062",
    storageBucket: "react-app-dd062.appspot.com",
    messagingSenderId: "114290791638"
}

firebase.initializeApp(config)
const databaseRef = firebase.database().ref()

export const todosRef = databaseRef.child('todos')