import { fetchTheData, use } from '../../../mockups/data.js';
import PropTypes from 'prop-types';
// import axios from 'axios';

// Note: this component is written using an experimental API
// that's not yet available in stable versions of React.

// For a realistic example you can follow today, try a framework
// that's integrated with Suspense, like Relay or Next.js.

// const url = 'https://cat-fact.herokuapp.com/facts';
// const resource = wrapPromise(fetchTheData(url));

const Biography = ({ artistId }) => {
  const url = 'https://cat-fact.herokuapp.com/facts';
  // const promise = axios.get(url).then(({data}) => data);
  // const bio = use(fetchTheData(`/${artistId}/bio`));
  // const bio = use(fetchTheData(url));
  // const bio = fetchTheData(url);
  const bio = use(fetchTheData(url));
  // const bio = wrapPromise(fetchTheData(url));
  // const url = 'https://cat-fact.herokuapp.com/facts';
  // const resource = wrapPromise(fetchTheData(url));  
  // const resource = wrapPromise(promise);  
  // const bio = resource.read();
  console.log("bio", bio)
  return (
    <section>
        <ul>
          {bio.map(item => (
            <li key={`${item._id}-${artistId}`}>
              {item.user}
            </li>))}
        </ul>
    </section>
  );
}

Biography.propTypes = {
  artistId: PropTypes.string.isRequired,
}

// This is a workaround for a bug to get the demo running.
// TODO: replace with real implementation when the bug is fixed.
// function use(promise) {
//   if (promise.status === 'fulfilled') {
//     return promise.value;
//   } else if (promise.status === 'rejected') {
//     throw promise.reason;
//   } else if (promise.status === 'pending') {
//     throw promise;
//   } else {
//     promise.status = 'pending';
//     promise.then(
//       result => {
//         promise.status = 'fulfilled';
//         promise.value = result;
//       },
//       reason => {
//         promise.status = 'rejected';
//         promise.reason = reason;
//       },      
//     );
//     throw promise;
//   }
// }

export default Biography;

// function wrapPromise(promise) {
//   let status = 'pending';
//   let response;

//   const suspender = promise.then(
//     res => {
//       status = 'success';
//       response = res;
//     },
//     err => {
//       status = 'error';
//       response = err;
//     },
//   );

//   const handler = {
//     pending: () => {
//       throw suspender;
//     },
//     error: () => {
//       throw response;
//     },
//     default: () => response,
//   };

//   const read = () => {
//     const result = handler[status] ? handler[status]() : handler.default();
//     return result;
//   };

//   return { read };
// }
