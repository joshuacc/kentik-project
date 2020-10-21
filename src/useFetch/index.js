import {useEffect, useState} from 'react';

/**
 *
 * @param {String} url
 * @param {Array} deps
 * @return {{ status: 'loading'} | {status: 'error', error: Error} | {status: 'loaded', data: any}}
 */
export const useFetch = (url, deps) => {
  const [status, setStatus] = useState({ status: "loading" });
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStatus({ status: "loaded", data }))
      .catch((error) => setStatus({ status: "error", error }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, ...deps]);

  return status;
};
