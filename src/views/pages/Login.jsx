/* eslint-disable no-unused-vars */
import React from 'react';
// const electron = window.require('electron');
// const remote = electron.remote
// const {dialog} = remote
// import { useDispatch } from 'react-redux';
// import { login } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';
// import { ipcRenderer } from '@electron/remote';
// const { ipcRenderer } = window.require('@electron/remote');
// const { ipcRenderer } = window.require("electron");

const Login = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const electron = window.electron;
  // const ipcRenderer = window.ipcRenderer;
  const api = window.api;
  const electronAPI = window.electronAPI;

  const handleLogin = async (event) => {
    // dispatch(login());
    console.log("Login Press")
    event.preventDefault();
    // dialog.showErrorBox('Error Box','Fatal Error')
    // ipcRenderer.send('login', { username: 'usernameMu', password: 'passwordMu' });
    // ipcRenderer.on("login:success", (event, arg) => {
    //   console.log(arg);
    // });

    // api.send('login', { username: 'usernameMu', password: 'passwordMu' })
    // // api.handle( 'login:success', ( event, data ) => {
    // //   console.log( "data react", data )
    // // }, event);    
    // api.handle( 'login:success', ( event, data ) => function( event, data ) {
    //   console.log( "data react", data )
    // }, event);

    // api.invoke('login', { username: 'usernameMu', password: 'passwordMu' }).then((result) => { methodName(result); });
    // api.invoke('login', { username: 'usernameMu', password: 'passwordMu' }).then((result) => { console.log(result) });
    let response = await api.invoke('login', { username: username, password: password }).then((result) => { return result });
    console.log("response", response)

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
  // const goToHallo = () => {
  //   navigate('/halo', {
  //     state: {
  //       userId: 7
  //     }
  //   });    
  // }
  const goToHallo = () => {
    // navigate('/halo/9');
    navigate('/halo');
  }
  // const handleAnother = () => {
  //   navigate('/halo');
  // }

  return (
    <div>
      <div>
        <form onSubmit={handleLogin}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </div>
      <div>
        <button
          onClick={goToHallo}
        >Go to hallo</button>
      </div>
      <div>
        {electron.homeDir()}
      </div>
      <div>
        {electron.osVersion()}
      </div>
      <div>
        {electron.osArch()}
      </div>
    </div>
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
