// Note: the way you would do data fetching depends on
// the framework that you use together with Suspense.
// Normally, the caching logic would be inside a framework.
import axios from 'axios';
const api = window.api;

let cache = new Map();
let cacheElectron = new Map();

export function fetchTheData(url) {
  // console.log("fetchTheData url", url)
  // const promise = axios.get(url).then(({data}) => data);
  // return promise;
  if (!cache.has(url)) {
    cache.set(url, getTheData(url));
  }
  return cache.get(url);
}

export function fetchDataFromElectron(string, payload=null) {
  if(!cacheElectron.has(string)) {

    let res = regroup(string, payload);
    cacheElectron.set(string, res);
    // cache.set(string);
  }
  return cacheElectron.get(string);
}

async function regroup(string, payload={ "check": "halo" }) {
  let response = await api.invoke(string, payload).then((result) => { return result });
  return response;
}

async function getTheData(url) {
  // console.log("getTheData url", url)
  const promise = await axios.get(url).then(({data}) => data);
  return promise;
  // if (url === '/the-beatles/albums') {
  //   // return await getAlbums();
  //   const promise = await axios.get(url).then(({data}) => data);
  //   return promise;
  // } else {
  //   throw Error('Not implemented');
  // }
}

export function use(promise) {
  if (promise.status === 'fulfilled') {
    return promise.value;
  } else if (promise.status === 'rejected') {
    throw promise.reason;
  } else if (promise.status === 'pending') {
    throw promise;
  } else {
    promise.status = 'pending';
    promise.then(
      result => {
        promise.status = 'fulfilled';
        promise.value = result;
      },
      reason => {
        promise.status = 'rejected';
        promise.reason = reason;
      },      
    );
    throw promise;
  }
}

// async function getAlbumsMe() {
//   await new Promise(resolve => {
//     setTimeout(resolve, 3000);
//   });

//   return [
//     {
//       id: 1,
//       nama: 'yogie'
//     }
//   ];
// }

// async function getAlbums() {
//   // Add a fake delay to make waiting noticeable.
//   await new Promise(resolve => {
//     setTimeout(resolve, 3000);
//   });

//   return [{
//     id: 13,
//     title: 'Let It Be',
//     year: 1970
//   }, {
//     id: 12,
//     title: 'Abbey Road',
//     year: 1969
//   }, {
//     id: 11,
//     title: 'Yellow Submarine',
//     year: 1969
//   }, {
//     id: 10,
//     title: 'The Beatles',
//     year: 1968
//   }, {
//     id: 9,
//     title: 'Magical Mystery Tour',
//     year: 1967
//   }, {
//     id: 8,
//     title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
//     year: 1967
//   }, {
//     id: 7,
//     title: 'Revolver',
//     year: 1966
//   }, {
//     id: 6,
//     title: 'Rubber Soul',
//     year: 1965
//   }, {
//     id: 5,
//     title: 'Help!',
//     year: 1965
//   }, {
//     id: 4,
//     title: 'Beatles For Sale',
//     year: 1964
//   }, {
//     id: 3,
//     title: 'A Hard Day\'s Night',
//     year: 1964
//   }, {
//     id: 2,
//     title: 'With The Beatles',
//     year: 1963
//   }, {
//     id: 1,
//     title: 'Please Please Me',
//     year: 1963
//   }];
// }
