"use client"
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker, MarkerF } from "@react-google-maps/api";

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
      {/* <Marker position={center} /> */}
      <MarkerF position={{ lat: 28.63391141147016, lng: 77.2143856734545 }} icon={{url:"https://i.ibb.co/ySmwNWg/bus.png"}}>
      </MarkerF>
    </GoogleMap>
  );
}