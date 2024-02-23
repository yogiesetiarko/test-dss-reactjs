import { Suspense } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  // createBrowserRouter, 
  // RouterProvider,
  // Link,
  Route,
  Routes,  
  // MemoryRouter as Router,
  HashRouter as Router,
  // BrowserRouter,
  // useRoutes,
} from 'react-router-dom'
import Login from './views/pages/Login'
import Hallo from './views/pages/Hallo'
import MyLayout from './views/layouts/MyLayout'
import Products from './views/pages/Products'
import FormProduct from './views/pages/Form/FormProduct'
// import itemRoutes from './routes/index.jsx'
// const router = createBrowserRouter(itemRoutes)
// console.log("router", router)

// const router = createBrowserRouter([
//   { path: "*", Component: Root },
// ]);

// function Root() {
//   // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
//   // component below are unchanged
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//     </Routes>
//   );
// }

function Loading() {
  return <h2>🌀 AAALoading...</h2>;
}

// eslint-disable-next-line react/prop-types
function App() {

  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <MyLayout />,
  //     children: [
  //       {
  //         path: "login",
  //         element: <Login />,
  //       },
  //     ],
  //   },
  //   { path: "hallo", element: <Hallo /> },
  // ]);

  // console.log("router", router)
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank" rel="noreferrer">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )

  // return (
  //   <>
  //     <RouterProvider router={router} />
  //   </>
  // );
  // return (
  //   <>
  //     <RouterProvider router={router} />
  //   </>
  // );

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<MyLayout />} >
          <Route path="/halo" element={<Hallo />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:action" element={<FormProduct />} />
          <Route 
            path="/product/:action/:id" 
            element={<Suspense fallback={<Loading />}><FormProduct /></Suspense>} 
            // lazy={() => import("./views/pages/Form/FormProduct")}
          />
          <Route path="/product/detail/:id" element={<Hallo />} />
        </Route>
      </Routes>
    </Router>
  );

  // return element;
}

export default App
