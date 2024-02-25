import React, { 
  Suspense,
  Fragment, 
} from "react"; 

const ProductList = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 1000)).then(
    () => import("../components/Product/ProductList")
  );
});

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h2>🌀 Loading...</h2>
    </div>
  );
  // return (<h2>🌀 Loading...</h2>);
}

function Products() {
  
  return(
    <Fragment>
      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
    </Fragment>
  );

}

export default Products;