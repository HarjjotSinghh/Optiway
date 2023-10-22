"use client"
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker, MarkerF, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";
import React, { useState } from 'react';


import { AllData } from "@/exports/exports";
import MapMarkers from "./MapMarkers";

export default function Map_() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    mapIds: ['daae8bf1cc7a907e'],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 28.63391141147016, lng: 77.2143856734545 }), []);
  const [origin, setOrigin] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [directions, setDirections] = useState<DirectionsResult | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'origin') {
      setOrigin(value);
    } else {
      setDestination(value);
    }
  };

  const getDirections = () => {
    const directionsService = new DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: 'driving',
      },
      (response: DirectionsResult, status: string) => {
        if (status === 'OK') {
          setDirections(response);
        } else {
          console.log(status);
        }
      }
    );
  };

  return (
    <GoogleMap
      zoom={14}
      center={center}
      mapContainerClassName="map-container w-[1000px] aspect-video"
      options={{
        mapId: "daae8bf1cc7a907e",
        disableDefaultUI: false,
      }}
    >
      <MarkerF position={{ lat: 28.63391141147016, lng: 77.2143856734545 }} icon={{url:"https://i.ibb.co/ySmwNWg/bus.png"}}>
      </MarkerF>
      <MarkerF position={{ lat: 28.6413, lng: 77.23804 }} icon={{url:"https://i.ibb.co/ySmwNWg/bus.png"}}>
      </MarkerF>

      <MarkerF position={{ lat: 28.658813, lng: 77.216742 }} icon={{url:"https://i.ibb.co/ySmwNWg/bus.png"}}>
      </MarkerF>

      <MarkerF position={{ lat: 28.632866, lng: 77.217735 }} icon={{url:"https://i.ibb.co/ySmwNWg/bus.png"}}>
      </MarkerF>

      <MarkerF position={{ lat: 28.623324, lng: 77.218633 }} icon={{url:"https://i.ibb.co/ySmwNWg/bus.png"}}>
      </MarkerF>

      <MarkerF position={{ lat: 28.6425575035953, lng: 77.17726271414865 }} icon={{url:"https://i.ibb.co/ySmwNWg/bus.png"}}>
      </MarkerF>

      <MarkerF position={{ lat: 28.646133673075166, lng: 77.20807482831081 }} icon={{url:"https://i.ibb.co/ySmwNWg/bus.png"}}>
      </MarkerF>
      
      <MarkerF position={{ lat: 28.62559418737058, lng: 77.2339732402264 }} icon={{url:"https://i.ibb.co/ySmwNWg/bus.png"}}>
      </MarkerF>

      <MarkerF position={{ lat: 28.635375161446287, lng: 77.20336750586664 }} icon={{url:"https://i.ibb.co/ySmwNWg/bus.png"}}>
      </MarkerF>
      
      <MarkerF position={{ lat: 28.647379464932254, lng: 77.20417649090399 }} icon={{url:"https://i.ibb.co/ySmwNWg/bus.png"}}>
      </MarkerF>

      <MarkerF position={{ lat: 28.644554002559552, lng: 77.22413212152217 }} icon={{url:"https://i.ibb.co/ySmwNWg/bus.png"}}>
      </MarkerF>

    </GoogleMap>
  );
}