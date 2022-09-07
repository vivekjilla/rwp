import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url: string) {
  const defaultState: any = null
  const defaultErrorState: any = null
  const defaultDataState: any = null
  const [data, setData] = useState(defaultDataState);
  const [loading, setLoading] = useState(defaultState);
  const [error, setError] = useState(defaultErrorState);

  useEffect(() => {
      setLoading('loading...')
      setData(null);
      setError(null);
      const source = axios.CancelToken.source();
      axios.get(url, { cancelToken: source.token })
      .then((res:any) => {
          setLoading(false);
          //checking for multiple responses for more flexibility 
          //with the url we send in.
          res.data && setData(res.data);
      })
      .catch((err: any) => {
          setLoading(false)
          setError('An error occurred. Awkward..')
      })
      return () => {
          source.cancel();
      }
  }, [url])

  return { data, loading, error }
}

export default useFetch;