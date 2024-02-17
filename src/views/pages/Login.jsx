// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../actions/authActions';

const Login = () => {
  // const dispatch = useDispatch();

  const handleLogin = () => {
    // dispatch(login());
    console.log("Login Press")

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: 'kminchelle',
        password: '0lelplR',
        // expiresInMins: 60, // optional
      })
    })
    .then(res => res.json())
    .then(console.log);

  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
