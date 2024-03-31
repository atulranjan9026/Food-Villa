import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import {restaurantList} from "../data"

// console.log(restaurantList[3].info.name)

function filterData(searchText,restaurants){
const filterList= restaurants.filter((restaurant)=>{
  restaurant.info.name.includes(searchText)
})
 filterList
}
// console.log(filterList);

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    console.log(searchText)
  };

  useEffect(()=>{
    getRestaurants();
  },[]);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.1230987&lng=75.85529729999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
       
        );
      console.log(data);
      const json= await data.json();
      console.log(json); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  

  return (
    <div>
      <div className="search-container">    
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchText}
          onChange={handleInputChange}
        />
        <button className="search-btn" 
        onClick={()=>{
          const data =filterData(searchText,restaurants) 
          setRestaurants(data)
        }}>
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;

