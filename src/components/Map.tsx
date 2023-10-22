"use client"
import { useEffect, useMemo } from "react";
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
  const [origin, setOrigin] = useState<Object>({lat: 28.63391141147016, lng: 77.2143856734545});
  const [destination, setDestination] = useState<Object>({ lat: 28.647379464932254, lng: 77.20417649090399 });
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);


  useEffect(() => {
    // getDirections();
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'origin') {
      setOrigin(value);
    } else {
      setDestination(value);
    }
  };

  const getDirections = () => {
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      }, 
      (response: google.maps.DirectionsResult | null, status: google.maps.DirectionsStatus) => {
        if (status === 'OK') {
          setDirections(response);
        } else {
          console.log(status);
        }
      }
    );
  };

  return (

    <div className="flex justify-center items-center w-full flex-col">
      <GoogleMap
        zoom={14}
        center={center}
        mapContainerClassName="map-container w-[1000px] aspect-video"
        options={{
          mapId: "daae8bf1cc7a907e",
          disableDefaultUI: false,
        }}
      >
        {directions && Array(directions).map((route, i) => (
          <DirectionsRenderer key={i} directions={route} />
        ))}
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
        <MarkerF position={{ lat: 28.6459518, lng: 77.1970436 }} icon={{url:"https://i.ibb.co/ySmwNWg/bus.png"}}>
        </MarkerF>
        
      </GoogleMap>
      <div className="pt-12">
        <button className="border-2 border-accent rounded-lg px-4 py-3 text-xl text-yellow-400 cursor-pointer hover:bg-accent hover:text-background transition-all duration-300 ease-in-out" onClick={getDirections}>
            Get Route From A to B
        </button>
      </div>

    </div>
  );
}