import { 
  Fragment, 
  Suspense,
  // useState 
} from "react";
import { lazy } from "react";
// import AfterLoad from "../components/AfterLoad";
import ComponentHallo from "../components/ComponentHallo";

const AfterLoad = lazy(() => import('../components/AfterLoad'));

function Users() {

  // const [show, setShow] = useState(false);

  // if(show) {
  //   return(
  //     <Fragment>
  //       <Suspense fallback={<ComponentHallo />}>
  //         <AfterLoad />
  //       </Suspense>
  //     </Fragment>
  //   );
  // } else {
  //   return(
  //     <Fragment>
  //       <button
  //         onClick={() => setShow(true)}
  //       >
  //         Users Page
  //       </button>
  //     </Fragment>
  //   );
  // }

  // return(
  //   <Fragment>
  //     {show ? (<Fragment>
  //       <Suspense fallback={<ComponentHallo />}>
  //         <AfterLoad />
  //       </Suspense>
  //     </Fragment>) : (<Fragment>
  //       <button
  //         onClick={() => setShow(true)}
  //       >
  //         Users Page
  //       </button>
  //     </Fragment>)}
  //   </Fragment>
  // );  

  return(
    <Fragment>
      <Suspense fallback={<ComponentHallo />}>
        <AfterLoad />
      </Suspense>
    </Fragment>
  );
  // return(
  //   <Fragment>
  //     <Suspense fallback={<ComponentHallo />}>
  //       <AfterLoad />
  //     </Suspense>
  //   </Fragment>
  // );
}

export default Users;