import React from "react";
import "./Placesdata.css";

import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const Placesdata = ({ place }) => {
  return (
    <div className="card">
      {place?.photo && (
        <img
          className="card-img"
          src={place.photo ? place.photo.images.large.url : "null"}
          alt="img"
        />
      )}

      <div className="name">
        <h2>{place.name}</h2>
      </div>

      <div className="price">
        {place?.price && <h4>Price: {place.price_level}</h4>}
      </div>
      <div className="ranking">
        {place?.ranking && <h4>Ranking: {place.ranking} </h4>}
      </div>
      <div className="cuisine">
        {place?.cuisine?.map((cuisines) => (
          <span>{cuisines.name}</span>
        ))}
      </div>
      <div className="adress">
        {place?.address && (
          <h4>
            <MdLocationOn /> {place.address}
          </h4>
        )}
      </div>
      <div className="phone">
        {place?.phone && (
          <h4>
            <BsTelephoneFill /> {place.phone}
          </h4>
        )}
      </div>

      <div className="link">
        
          <a href={place.website} target="_blank">
            Website
          </a>
       

        
          <a href={place.web_url} target="_blank">
            Trip Advisor
          </a>
       
      </div>
    </div>
  );
};

export default Placesdata;
