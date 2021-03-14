
import './App.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.confiq';
import { useState } from 'react';

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    photo: ''
    
  })
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase.auth()
    .signInWithPopup(provider)
    .then(result => {
      const{displayName, email, photoURL} = result.user;
      const signInUser = {
        isSignIn: true,
        name: displayName,
        email: email,
        photo: photoURL
      }
      setUser(signInUser);
    })
    .catch(error => {
      console.log(error)
      console.log(error.massage);
    })
  }

  const handleSignOut = () => {
    firebase.auth().signOut()
    .then(res => {
      const signOutUser = {
        isSignIn: false,
        name: '',
        email: '',
        photo: ''
      }
      setUser(signOutUser)
      console.log(res);

    })
    .catch(err => {
      console.log(err);
    })
  }
  return (
    <div className="App">

      {
        user.isSignIn ? <button onClick={handleSignOut}>Sign Out</button> : <button onClick={handleSignIn}>Sign In</button>
      }
      {
        user.isSignIn && <div>
          <p>Welcome, {user.name}</p>
          <p>Email : {user.email}</p>
          <img src={user.photo} alt=""/>
        </div>
      }
    
    </div>
  );
}

export default App;
