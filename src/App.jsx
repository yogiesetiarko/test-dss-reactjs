import { 
  // lazy, 
  Suspense 
} from 'react'
import './App.css'
import { 
  Route,
  Routes,  
  HashRouter as Router,
} from 'react-router-dom'
import Login from './views/pages/Login'
import Hallo from './views/pages/Hallo'
import MyLayout from './views/layouts/MyLayout'

import FormProduct from './views/pages/Form/FormProduct'
import Products from './views/pages/Products'

function Loading() {
  return <h2>🌀 AAALoading...</h2>;
}

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<MyLayout />} >
          <Route path="/halo" element={<Hallo />} />
          <Route 
            path="/products" 
            // Component={Products} 
            element={<Suspense fallback={<Loading />}><Products /></Suspense>} 
            // element={<Products />} 
          />
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

}

export default App
