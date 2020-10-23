import { useState, useCallback, useRef, useEffect } from 'react'; // useCallback to avoid infinite loops

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);
  //useRef insures this is data that won't change or
  // in this case won't be reinitialized once
  // this function runs again

  const sendRequest = useCallback(async (
    url,
    method = 'GET',
    body = null,
    headers = {},
  ) => {
    setIsLoading(true);
    const httpAbortCtrl = new AbortController();
    activeHttpRequests.current.push(httpAbortCtrl);

    try {
      const response = await fetch(url, {
        method,
        body,
        headers,
        signal: httpAbortCtrl.signal
      });
  
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      return responseData;
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
    }
    // how first function that is returned in useEffect works:
    // it's a cleanup function that executes before
    // the next time useEffect runs again
    // or when the component using usEffect unmounts
  }, []);

  return {isLoading, error, sendRequest, clearError};
};
