import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { FETCH_URL, IMG_CON_URL } from "../constants";
import Shimmer from "./ShimmerCart.jsx";
import useRestaurant from "../utils/useRestaurant";

const RestaurantsMenu = () => {
  const { id } = useParams();
  const restaurantId = useRestaurant();

  console.log(id);
  console.log("restaurantId :", restaurantId?.length);
  const data = useMemo(() => {
    let temp;
    restaurantId?.forEach((element) => {
      if (element.info.id === id) {
        console.log(element.info.id);
        temp = element.info;
      }
    });

    return temp;
  }, [restaurantId]);

  console.log("data : ", data);

  return !data ? (
    <Shimmer />
  ) : (
    <div>
      <div className="restaurant-list-card">
        <img
          className="imgCard"
          src={IMG_CON_URL + data.cloudinaryImageId}
          alt=" "
        />
        <h2>{data.name}</h2>
        <h3>{data.costForTwo}</h3>
        {data && data.cuisines && <h3>{data.cuisines.join(", ")}</h3>}
        <h4>{data.avgRating}</h4>
        <h5>{data.locality}</h5>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
