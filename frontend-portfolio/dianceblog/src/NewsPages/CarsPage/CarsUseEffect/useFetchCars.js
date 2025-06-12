import { useEffect, useState } from "react";

const useFetchCars = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [url]);

  return { data };
};

export default useFetchCars;
