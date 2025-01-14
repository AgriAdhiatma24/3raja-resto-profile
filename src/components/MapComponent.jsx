import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const location = {
    lat: -7.741594919464716,
    lng: 110.38510755418686,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyCg5Ne-Z8tfXaNEA_u_zbclvcJuk7KrZPY">
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={location}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
