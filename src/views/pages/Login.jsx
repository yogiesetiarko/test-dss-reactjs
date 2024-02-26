import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const electron = window.electron;
  const api = window.api;

  const handleLogin = async (event) => {
    event.preventDefault();

    let response = await api.invoke('login', { username: username, password: password }).then((result) => { return result });
    // console.log("response", response)

    if (response.success) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("firstName", response.data.firstName);
      localStorage.setItem("lastName", response.data.lastName);
      localStorage.setItem("userName", response.data.username);

      Swal.fire({
        title: "Login Success.",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK",
        allowOutsideClick: false,
      }).then((result) => {
        // console.log("result", result);
        if (result.isConfirmed === true) {
          navigate('/products');
        }
      });
    } else {
      await api.send('login:failed', { message: response.message })

      setUsername('')
      setPassword('')
    }

  };

  const goToInfo = () => {
    Swal.fire({
      title: "<strong>INFO</strong>",
      icon: "info",
      html: `
        <div>
          <span>${electron.homeDir()}</span>
        </div>
        <div>
          <span>${electron.osVersion()}</span>
        </div>
        <div>
          <span>${electron.osArch()}</span>
        </div>
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
      cancelButtonAriaLabel: "Thumbs down"
    });
  }

  const reset = (event) => {
    event.preventDefault();
    setUsername('')
    setPassword('')
  }

  return (
    <div className='p-2'>

      <div className="flex items-center justify-center min-h-screen bg-[#242424]">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg border border-slate-300">
          <h3 className="text-2xl font-bold text-center text-black">Login to your account</h3>
          <form onSubmit={handleLogin}>
            <div className="mt-4">
              <div>
                <label className="block">Username</label>
                <input 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  placeholder="Username" 
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
                <button 
                  className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                  onClick={reset}
                >
                  Reset
                </button>
              </div>
              <div className="flex items-baseline justify-between my-4">
                <button
                  onClick={goToInfo}
                >Info</button>
              </div>

            </div>
          </form>
          <div className="grid grid-cols-1 text-[#000] text-xs">
            <span><b>* Notes</b> :</span>
          </div>
          <div className="grid grid-cols-1 text-[#000] text-xs">
            username : kminchelle
          </div>
          <div className="grid grid-cols-1 text-[#000] text-xs">
            password : 0lelplR
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
