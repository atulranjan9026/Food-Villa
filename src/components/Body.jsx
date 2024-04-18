import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerCart.jsx";
import { filterData } from "../utils/helper";
import { Link } from "react-router-dom";
import { FETCH_URL } from "../constants";

const Body = () => {
  const [allRestaurants, satAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
  };

  useEffect(() => {
    getRestaurants();
  }, [searchText]);

  async function getRestaurants() {
    try {
      const data = await fetch(FETCH_URL);
      const json = await data.json();
      const list =
        json?.data?.cards[1].groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants;
      console.log(list);
      satAllRestaurants(list);
      setFilteredRestaurants(list);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  if (!allRestaurants) return null;

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchText}
          onChange={handleInputChange}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, filteredRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
<div className="restaurant-list">
  {filteredRestaurants.map((restaurant, index) => (
    <Link to={"/restaurant/" + restaurant.info.id} key={index}>
      <RestaurantCard {...restaurant.info} />
    </Link>
  ))}
</div>
    </>
  );
};

export default Body;
