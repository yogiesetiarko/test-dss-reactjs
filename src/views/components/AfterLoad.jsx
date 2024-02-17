import { 
  Fragment, 
  // Suspense,
  // useEffect,
  // useState,
} from "react";
// import axios from "axios";
import { fetchTheData, use } from "../../mockups/data";
// import ComponentHallo from "./ComponentHallo";
// import fetchData from "../../helper/fetchData";

// // This is a workaround for a bug to get the demo running.
// // TODO: replace with real implementation when the bug is fixed.
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

function AfterLoad() {
  const url = 'https://cat-fact.herokuapp.com/facts';
  const namesList = use(fetchTheData(url));
  // const [item, setItem] = useState([]);
  // const [name, setName] = useState("");
  // const albums = use(fetchData(`/the-beatles/albums`));

  // useEffect(() => {
  // }, [

  // ])

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     // setCount('Timeout called!');

  //     let getitems = async () => {
  //       try {
  //         let url = 'https://cat-fact.herokuapp.com/facts';
  //         let response = await axios.get(url);
  //         const promise = axios.get(url).then(({data}) => data);
  //         console.log("promise", promise)
  //         // let resProm = () => { return wrapPromise(promise)};
  //         // let response = ;
  //         console.log("response", response)
  //         // console.log("resProm", resProm)
  //         setName("aaaa")
  //       } catch (error) {
  //         console.log("error", error)
  //       }
  //     };
  //     getitems();

  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);  

  return(
    <Fragment>
      <div>AfterLoad</div>
      <div>
        <ul>
          {namesList.map(item => (
            <li key={item._id}>
              {item.user}
            </li>))}
        </ul>
      </div>
    </Fragment>
  );
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

export default AfterLoad;