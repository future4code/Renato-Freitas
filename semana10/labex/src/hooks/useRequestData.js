import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialState, url) => {
  const [data, setData] = useState(initialState);

  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => alert(err.response.data.message));
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};

export default useRequestData;
