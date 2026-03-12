import resData from "../utils/mockdata.js";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search Restaurant" />
        <button>Search</button>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listOfRestaurants.filter((res) => {
              return res.info.avgRating >= 4;
            });
            setListOfRestaurants(filteredList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} restaurant={res.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
