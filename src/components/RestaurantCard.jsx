import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({
  id,
  cloudinaryImageId,
  name,
  cuisines,
  avgRatingString,
  locality,costForTwo,
}) => {
  return (
    <>
      <div className="restaurant-list-card">
        <img
          className="imgCard"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId
          }
          alt=" "
        />
        <h2 className="">{name}</h2>
        <h2 className="">{costForTwo}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRatingString}</h4>
        <h4>{locality}</h4>
      </div>
    </>
  );
};

export default RestaurantCard;
