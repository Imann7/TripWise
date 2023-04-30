import React from 'react'
import GoogleMapReact from 'google-map-react';
import { MdLocationOn } from 'react-icons/md';

const Map = ({setCoordinates, setBounds, coordinates,places}) => {


  
  return (
    <div style={{ marginTop:"25px", height: '91vh', width: '900px' }} className='map-conatiner'>

<GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDAQmeixaoDEutVk2bvvG9Njo5RcsiqSoo" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={11}

        onChange={(e)=>{



          setCoordinates({lat: e.center.lat, lng: e.center.lng});
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});


        }}
      >


{

places?.map((place,i) =>   (
  <div lat={place.latitude} 
          lng={place.longitude}
          key={i}
          
          
          >

<MdLocationOn/> 
          </div>


)
)}
        


      </GoogleMapReact>

    </div>
  )
}

export default Map