
import './App.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.confiq';
import { useState } from 'react';

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

function App() {
  const [nUser, setNUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    photo: ''
  })
  const goggleProvider = new firebase.auth.GoogleAuthProvider();
  var fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleSignIn = () => {
    firebase.auth()
    .signInWithPopup(goggleProvider)
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
        photo: '',
        error: '',
        success: false
      }
      setUser(signOutUser)
      console.log(res);

    })
    .catch(err => {
      console.log(err);
    })
  }
  const handleFbSignIn = () => {
    firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((result) => {
      var credential = result.credential;
      var user = result.user;
      var accessToken = credential.accessToken;
    })
    .catch((error) => {
       var errorCode = error.code;
      var errorMessage = error.message;
       var email = error.email;
      var credential = error.credential;
     });

  }

  const handleBlur = (e) => {
    console.log(e.target.name, e.target.value);
    let isFormValid = true;
    if (e.target.name === 'email') {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }

    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 8;
      const isPasswordHasNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && isPasswordHasNumber;
    }
    if (isFormValid) {
      const newUser = {...user};
      newUser[e.target.name] = e.target.value;
      setUser(newUser);
      
    }
  };
  const handleSubmit = (e) => {   
    if (nUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then((res) => {
      const newUser = {...user};
      newUser.error = '';
      newUser.success = true;
      setUser(newUser);
      updateUserName(user.name)
  })
  .catch((error) => {
    const newUser = {...user};
    var errorCode = error.code;
    var errorMessage = error.message;
    newUser.error = errorCode && errorMessage;
    newUser.success = false;
   setUser(newUser);
  });
     
  }

  if (!nUser && user.email && user.password) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then((res) => {
      const newUser = {...user};
      newUser.error = '';
      newUser.success = true;
      setUser(newUser);
      updateUserName(user.name)
  })
  .catch((error) => {
    const newUser = {...user};
    var errorCode = error.code;
    var errorMessage = error.message;
    newUser.error = errorCode && errorMessage;
    newUser.success = false;
   setUser(newUser);
  });
  }
  
    e.preventDefault();

  }
  const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
      
    })
    .then(function() {
      console.log('user name update successfully');
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  return (
    <div className="App">

      {
        user.isSignIn ? <button onClick={handleSignOut}>Sign Out</button> : <button onClick={handleSignIn}>Sign In</button>
      }
      <button onClick={handleFbSignIn}>Sign In By Facebook</button>
      {
        user.isSignIn && <div>
          <p>Welcome, {user.name}</p>
          <p>Email : {user.email}</p>
          <img src={user.photo} alt=""/>
        </div>
      } <br/><br/><br/>
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={() => setNUser(!nUser)} type="checkbox" name="nUser" id=""/>
        <label htmlFor="nUser">Sign In For New User</label><br/><br/>
        {nUser && <input onBlur={handleBlur} type="text" name="name" id="" placeholder='input your name' required/>}<br/>
          <input onBlur={handleBlur} type="email" name="email" id="" placeholder='input your email' required/> <br/>
          <input onBlur={handleBlur} type="password" name="password" id="" placeholder='input your password' required/><br/><br/>
          <input type="submit" value={nUser ? "Sign Up" : "Sign In"}/>
      </form>
      <p style={{color: 'red'}}>{user.error}</p>
      {user.success && <p style={{color: 'green'}}>User {nUser ?'Created': 'Log In'} Successfully</p>}
    </div>
  );
}

export default App;
