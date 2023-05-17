import { useEffect, useState } from "react";

const useFetch = (url, initialValues = []) => {
  // state
  const [data, setData] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log("somethings went wrong:", error);
      setError(error);
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
