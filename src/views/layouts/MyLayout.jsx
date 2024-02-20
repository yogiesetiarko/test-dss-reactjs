// import React from "react";
import { 
  // Suspense, 
  Fragment 
} from "react";
import { useOutlet } from "react-router-dom";
// import ComponentHallo from "../components/ComponentHallo";
// import SideNav from "../components/SideNav/SideNav";

function MyLayout() {
  const outlet = useOutlet();

  return(
    <Fragment>
      <div>
        <div>
          Layout of nothing
        </div>
        <div>
          {outlet}
        </div>
      </div>
    </Fragment>
  );
}

export default MyLayout;