import { 
  Fragment,
  Suspense 
} from "react";
import PropTypes from 'prop-types';
// import Albums from './Product/Albums.jsx';
// import Panel from './Product/Panel.jsx';
import Biography from './Product/Biography.jsx';

const ComponentProducts = ({ id, name }) => {
  return(
    <Fragment>
      <h1>{name}</h1>
      <Suspense fallback={<Loading />}>
        <Biography artistId={id} />
      </Suspense>
    </Fragment>
  );
}


function Loading() {
  return <h2>🌀 Loading...</h2>;
}

// const ComponentProducts = ({ artist }) => {
//   return(
//     <Fragment>
//       <h1>{artist.name}</h1>
//       <Suspense fallback={<Loading />}>
//         <Biography artistId={artist.id} />
//         <Panel>
//           <Albums artistId={artist.id} />
//         </Panel>
//       </Suspense>
//     </Fragment>
//   );
// }

ComponentProducts.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default ComponentProducts;