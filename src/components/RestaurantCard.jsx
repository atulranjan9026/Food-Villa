import React from "react";
import { restaurantList } from "../data";

const RestaurantCard = ({id,cloudinaryImageId,name,cuisines,avgRatingString,locality}) => {

  return (
    <div className="card">
      <img
        className="img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +cloudinaryImageId
        }
        alt=" "
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString}</h4>
      <h4>{locality}</h4>
    </div>
  );
};

export default RestaurantCard;
