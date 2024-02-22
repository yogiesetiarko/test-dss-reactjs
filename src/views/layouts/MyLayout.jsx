// import React from "react";
import { 
  // Suspense, 
  Fragment 
} from "react";
import { 
  useOutlet, 
  useNavigate 
} from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiLogOut, FiList } from "react-icons/fi";
// import ComponentHallo from "../components/ComponentHallo";
// import SideNav from "../components/SideNav/SideNav";

function MyLayout() {
  const outlet = useOutlet();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/')
  }

  const goToProducts = () => {
    navigate('/products')
  }

  return(
    <Fragment>
      <div className='p-2'>
        <div className="flex items-baseline justify-between my-4">
          <button
            onClick={goToHome}
          >
            <FaHome />
          </button>
          <button
            onClick={goToProducts}
          >
            <FiList />
          </button>
          <button
            onClick={goToHome}
          >
            <FiLogOut />
          </button>
        </div>
        <div>
          {outlet}
        </div>
      </div>
    </Fragment>
  );
}

export default MyLayout;