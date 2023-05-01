import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { MdLocationOn } from "react-icons/md";
import mapStyles from "./mapStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Aicon = ({ icon }) => (
  <div>
    <FontAwesomeIcon icon={icon} />
  </div>
);
const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  const [location, setLocation] = useState(null);

  const handleMapClick = (event) => {
    setLocation({
      lat: event.lat,
      lng: event.lng,
    });
  };

  return (
    <div
      style={{ marginTop: "25px", height: "91vh", width: "900px" }}
      className="map-conatiner"
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDAQmeixaoDEutVk2bvvG9Njo5RcsiqSoo" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={11}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onClick={handleMapClick}
      >
        {places?.map((place, i) => (
          <div lat={place.latitude} lng={place.longitude} key={i}>
            <Aicon icon={faMapMarkerAlt} />
          </div>
        ))}
        {location && (
          <div lat={location.lat} lng={location.lng}>
            <Aicon icon={faMapMarkerAlt} />
          </div>
        )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
