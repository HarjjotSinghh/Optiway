import React from "react";
import { GoogleMap } from "@react-google-maps/api";

// import { Map, DirectionsService, DirectionsRenderer } from '@google/maps';

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>

    </div>
  );
}
