import { Marker } from "@react-google-maps/api";

export default interface MarkerData {
    from: string;
    to: string;
    longitude_from: number;
    latitude_from: number;
    longitude_to: number;
    latitude_to: number;
    route: string;
    route_length: string;
    frequency: string;
}
  
export default interface MapMarkersProps {
    data: Array<MarkerData>;
}


export const AllData : Array<Object> = [
    {
      "from": "",
      "to": "",
      "longitude_from": 0,
      "latitude_from": 0,
      "longitude_to": 0,
      "latitude_to": 0,
      "route": "",
      "route_length": "",
      "frequency": "",
    },
    {
      "from": "",
      "to": "",
      "longitude_from": 0,
      "latitude_from": 0,
      "longitude_to": 0,
      "latitude_to": 0,
      "route": "",
      "route_length": "",
      "frequency": "",
    }
  ];