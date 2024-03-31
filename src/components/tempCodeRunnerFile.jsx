import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import {restaurantList} from "../data"

// console.log(restaurantList[3].info.name)

function filterData(searchText,restaurants){
const filterList= restaurants.filter((restaurant)=>{
 return restaurant.info.name.includes(searchText)
})
return filterList
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
        ,
        {
          mode: 'no-cors'
        }
        );
      console.log(data);
      const json= await data.json();
      console.log(json); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
