import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { 
  // BrowserRouter,
  // createBrowserRouter, 
  // RouterProvider 
} from 'react-router-dom'
// import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import itemRoutes from './routes/index.jsx'

// const router = createBrowserRouter(itemRoutes)
// console.log("router", router)
// console.log("router.basename", router.basename)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// );
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// // calling IPC exposed from preload script
// window.electron.ipcRenderer.once('ipc-example', (arg) => {
//   // eslint-disable-next-line no-console
//   console.log(arg);
// });
// window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
