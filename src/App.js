import React, { useState } from 'react';
import './App.css';
import { auth, googleProvider } from './firebase';
import logo from './google-logo.png';

function App() {
  const [user, setUser] = useState(null);
  const googleLogin = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
      setUser(await auth.currentUser);
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div onClick={googleLogin} className='signup-box'>
        <div>
          <img src={logo} className='logo'></img>
        </div>
        <div>
          <p>Google Login</p>
        </div>
      </div>
      <h2>{user?.displayName}</h2>
      <h2>{user?.email}</h2>
    </div>
  )
}

export default App
