import { MarkerF } from "@react-google-maps/api"; // Import your MarkerF component
import MarkerData from "@/exports/exports";
import MapMakerProps from "@/exports/exports";

const MapMarkers: React.FC<MapMakerProps> = ({ data }) => {
  return (
    <>
      {data.map((markerData, index) => (
        <MarkerF
          key={index}
          position={{ lat: markerData.latitude_from, lng: markerData.longitude_from }}
          icon={{ url: "https://i.ibb.co/ySmwNWg/bus.png" }}
        >
        </MarkerF>
      ))}
    </>
  );
};

export default MapMarkers;
