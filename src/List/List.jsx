import React, { useState } from "react";
import "./List.css";
import Placesdata from "../Places Data/Placesdata";

const List = ({places, type, setType}) => {

  
  

  return (
    <div className="list-container">
      <h4>Discover the Best Restaurants, Hotels, and Attractions in Your Area</h4>

      <div className="select-container">
        <span className="type-text">Type</span>
        <select value={type} onChange={(e)=>setType(e.target.value)}> 
          <option value="restaurants">Restaurants</option>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
        </select>
        
      </div>

      <div className="places-container">
        {places?.map((place, i) => (
          <Placesdata key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default List;
