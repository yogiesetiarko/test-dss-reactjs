// Note: the way you would do data fetching depends on
// the framework that you use together with Suspense.
// Normally, the caching logic would be inside a framework.
import axios from 'axios';

let cache = new Map();

export function getData(url) {
  console.log("fetchTheData url", url)
  // const promise = axios.get(url).then(({data}) => data);
  // return promise;
  if (!cache.has(url)) {
    cache.set(url, getTheData(url));
  }
  return cache.get(url);
}

async function getTheData(url) {
  console.log("getTheData url", url)
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
