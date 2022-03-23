import React, { useState, useEffect } from "react";

/*
  This hook handle fetching data from a url while maintaining
    loading state
    data state
    error state

  @params url : string
  @payload: { loading, data, error }
*/
const useFetch = (url: string) => {
  // loading state to indicate fetch is fired
  const [loading, setLoading] = useState(true);

  // response data from the API call
  const [data, setData] = useState();
  // catch error when API call fails
  const [error, setError] = useState();

  useEffect(() => {
    const handleFetch = async () => {
      try {
        // fetch data from the API
        const resp = await fetch(url);
        const results = await resp.json();

        setData(results);
      } catch (err) {
        //setError(err);
        console.log("err:", err);
      } finally {
        setLoading(false);
      }
    };

    handleFetch();
  }, []);

  // return use fecth goodies
  return { loading, data, error };
};

export default useFetch;
