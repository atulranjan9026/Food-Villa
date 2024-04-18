import { useEffect, useState } from "react";
import { FETCH_URL } from "../constants";

const useRestaurant = () => {
  const [restaurantId, setRestaurantId] = useState(null);
  useEffect(() => {
    menuData();
  }, []);

  async function menuData() {
    try {
      const data = await fetch(FETCH_URL);
      const json = await data.json();
      const list =
        json?.data?.cards[1].groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
          ?.card?.card?.restaurants
          setRestaurantId(list);
      // console.log(list)

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return restaurantId;
};

export default useRestaurant;
