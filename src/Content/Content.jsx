import React, { useEffect, useState } from "react";
import "./Content.css";
import Map from "../Map/Map";
import List from "../List/List";
import { getData } from "../axios";


const Content = () => {
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [places, setPlaces] = useState([]);
  const [type, setType] = useState("restaurants");

  useEffect(() => {
    if (bounds) { // Check if bounds is not null or undefined
      getData(type, bounds.sw, bounds.ne).then((data) => {
       
        if (data && data.length > 0) {
          setPlaces(data.filter((place) => place.name));
        }
      });
    }
  }, [type, coordinates, bounds]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  return (

    <>
       
    <div className="content">
     
     <div className="list">
       
       <List places={places} type ={type} setType={setType} />
     </div>

     <div className="map">
       <Map
         setCoordinates={setCoordinates}
         setBounds={setBounds}
         coordinates={coordinates}
       />
     </div>
   </div>
    
    </>
    
   
  );
};

export default Content;
