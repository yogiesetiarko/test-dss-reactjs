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
// const { dialog } = window.require('electron');

const Login = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const electron = window.electron;
  // const ipcRenderer = window.ipcRenderer;
  const api = window.api;
  const electronAPI = window.electronAPI;

  const handleLogin = async (event) => {
    // dispatch(login());
    console.log("Login Press")
    event.preventDefault();
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

    if (response.success) {
      // navigate('/halo');
      navigate('/products');
    } else {
      // dialog.showErrorBox('Error Box',response.message)
      // console.log(response.message)
      await api.send('login:failed', { message: response.message })

      setUsername('')
      setPassword('')
    }

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
  const goToProducts = () => {
    // navigate('/halo/9');
    navigate('/products');
  }
  
  // const handleAnother = () => {
  //   navigate('/halo');
  // }

  return (
    <div className='p-2'>

      <div className="flex items-center justify-center min-h-screen bg-[#242424]">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg border border-slate-300">
          <h3 className="text-2xl font-bold text-center text-black">Login to your account</h3>
          <form onSubmit={handleLogin}>
            <div className="mt-4">
              <div>
                <label className="block">Email</label>
                <input 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  placeholder="Email" 
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" 
                />
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Password" 
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" 
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button type="submit" className="px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-blue-900">Login</button>
                <button type="submit" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Reset</button>
                {/* <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a> */}
              </div>
              <div className="flex items-baseline justify-between my-4">
                <button
                  onClick={goToHallo}
                >hallo</button>
                <button
                  onClick={goToProducts}
                >Products</button>
              </div>

            </div>
          </form>
        </div>
      </div>

      {/* <div className="grid grid-cols-1">
        {electron.homeDir()}
      </div>
      <div className="grid grid-cols-1">
        {electron.osVersion()}
      </div>
      <div className="grid grid-cols-1">
        {electron.osArch()}
      </div> */}
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
