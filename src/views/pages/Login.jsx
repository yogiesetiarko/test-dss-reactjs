import React from 'react';
// const electron = window.require('electron');
// const remote = electron.remote
// const {dialog} = remote
// import { useDispatch } from 'react-redux';
// import { login } from '../actions/authActions';
// import { useNavigate } from 'react-router-dom';
// import { ipcRenderer } from '@electron/remote';
// const { ipcRenderer } = window.require('@electron/remote');

const Login = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (event) => {
    // dispatch(login());
    console.log("Login Press")
    event.preventDefault();
    // dialog.showErrorBox('Error Box','Fatal Error')
    // ipcRenderer.send('login', { username: 'usernameMu', password: 'passwordMu' });
    // fetch('https://dummyjson.com/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
        
    //     username: 'kminchelle',
    //     password: '0lelplR',
    //     // expiresInMins: 60, // optional
    //   })
    // })
    // .then(res => res.json())
    // .then(console.log);

  };

  // const handleAnother = () => {
  //   navigate('/halo');
  // }

  return (
    <form onSubmit={handleLogin}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>    
  );

  // return (
  //   <div>
  //     <h1>Login Page</h1>
  //     <button onClick={handleLogin}>Login</button>
  //     <button onClick={handleAnother}>Another</button>
  //   </div>
  // );
};

export default Login;
