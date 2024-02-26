// import React from "react";
import { 
  Fragment 
} from "react";
import { 
  useOutlet, 
  useNavigate 
} from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiLogOut, FiList } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { IconContext } from "react-icons";
import Swal from 'sweetalert2';

function MyLayout() {
  const outlet = useOutlet();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/')
  }

  const goToProducts = () => {
    navigate('/products')
  }

  const logout = () => {
    localStorage.clear();
    navigate('/')
  }

  const goToProfile = () => {
    Swal.fire({
      title: "<strong>INFO</strong>",
      icon: "info",
      html: `
        <div>
          <span>${localStorage.getItem('email')}</span>
        </div>
        <div>
          <span>${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}</span>
        </div>
        <div>
          <span>${localStorage.getItem('userName')}</span>
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

  const onLogout = () => {
    Swal.fire({
      title: "<strong>Are You Sure ?</strong>",
      icon: "info",
      html: ``,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      allowOutsideClick: false,
      confirmButtonText: `Yes!`,
    }).then((result) => {
      // console.log("result", result);
      if (result.isConfirmed === true) {
        logout();
      }
    });    
  }

  return(
    <Fragment>
      <div className='p-2'>
        <div className="flex items-baseline justify-between my-4">
          <div>
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
          </div>
          <div>
            <button
              onClick={goToProfile}
            >
              <FaRegUser />
            </button>
            <button
              className="bg-[red]"
              onClick={onLogout}
            >
              <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <div>
                  <FiLogOut />
                </div>
              </IconContext.Provider>
            </button>
          </div>
        </div>
        <div>
          {outlet}
        </div>
      </div>
    </Fragment>
  );
}

export default MyLayout;