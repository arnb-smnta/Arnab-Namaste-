import { useState, useEffect } from "react";
import { swiggy_api, resobj } from "./data";
const useSwiggyData = () => {
  const [resrest, setresrest] = useState(null);

  const [data1, setdata1] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(swiggy_api);

    const json = await data.json();

    console.log(json);

    setresrest(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );

    setdata1(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(data1);
    console.log(resrest);
  };
  return [resrest, data1];
};
export default useSwiggyData;
