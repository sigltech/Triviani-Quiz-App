// custom hook called useAxios
import axios from 'axios';
import { useEffect, useState } from 'react';

// setting axios base url to the base trivia api url
axios.defaults.baseURL = 'https://opentdb.com/';

const useAxios = ({ url }) => {
  // destruction of url for when this hook is used

  // setting state of response, error, loading
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      // fetching data with axios
      axios
        .get(url)
        // setting fetch data to response
        .then((res) => setResponse(res.data))
        // catching any errors
        .catch((err) => setError(err))
        // setting loading to false to stop loading page
        .finally(() => setLoading(false));
    };
    // calling function
    fetchData();

    // useEffect will only fire when url is changed
  }, [url]);

  // returning response, loading and error
  return { response, loading, error };
};

export default useAxios;
