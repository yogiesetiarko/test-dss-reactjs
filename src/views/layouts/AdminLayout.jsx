// import React from "react";
import { Suspense, Fragment } from "react";
import { useOutlet } from "react-router-dom";
import ComponentHallo from "../components/ComponentHallo";
import SideNav from "../components/SideNav/SideNav";

function AdminLayout() {
  const outlet = useOutlet();

  return(
    <Fragment>
      <div>
        <Suspense fallback={<ComponentHallo />}>
          <SideNav />
        </Suspense>
        <div>
          {outlet}
        </div>
      </div>
    </Fragment>
  );
}

export default AdminLayout;