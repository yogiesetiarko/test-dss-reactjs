import { Fragment, Suspense } from "react";
import NewsComponent from "../components/NewsComponent";
import ComponentHallo from "../components/ComponentHallo";

function News() {
  return(
    <Fragment>
      <Suspense fallback={<ComponentHallo />}>
        <NewsComponent />
      </Suspense>
    </Fragment>
  );
}

export default News;