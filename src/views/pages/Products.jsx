import { 
  Fragment, 
  // useState 
} from "react"; 
import ComponentProducts from "../components/ComponentProducts";

function Products() {
  // const [show, setShow] = useState(false);

  // if(show) {
  //   return(
  //     <Fragment>
  //       <ComponentProducts 
  //         id={'the-beatles'}
  //         name={'The Beatles'}
  //       />
  //     </Fragment>
  //   );
  // } else {
  //   return(
  //     <Fragment>
  //       <div>
  //         <button
  //           onClick={()=>setShow(true)}
  //         >
  //           Get Products
  //         </button>
  //       </div>
  //     </Fragment>
  //   );
  // }
  
  return(
    <Fragment>
      <ComponentProducts 
        id={'the-beatles'}
        name={'The Beatles'}
      />
    </Fragment>
  );

}

export default Products;