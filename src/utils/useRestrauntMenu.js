import { useEffect, useState } from "react";
import { menu_url } from "./data";
const useRestrauntMenu = (resId) => {
  //fetchData

  const [resinfo, setresinfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(menu_url + resId.toString());
    const json = await data.json();
    setresinfo(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  };

  return resinfo;
};

export default useRestrauntMenu;
