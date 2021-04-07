import { useState } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';

const MapInsideItems = ({ shops, map }) => {
  const generateLatLngLiteralFromShop = (shop) => {
    const positions = shop?.custom_fields?.location[0]
      .split(',')
      .map((val) => parseFloat(val));

    return {
      lat: positions[0],
      lng: positions[1],
    };
  };

  const [infoWindow, setInfoWindow] = useState(null);
  const center = {
    lat: 35.409776993526116,
    lng: 136.75644950454605,
  };

  const [infoWindowTitle, setInfoWindowTitle] = useState('');
  const [infoWindowPosition, setInfoWindowPosition] = useState(center);

  const onLoadInfoWindow = (infoWindowObj) => {
    setInfoWindow(infoWindowObj);
  };

  const showInfoWindow = (shop) => {
    setInfoWindowTitle(shop?.title?.rendered);
    setInfoWindowPosition(generateLatLngLiteralFromShop(shop));
    // infoWindow?.open(map);
  };

  const divStyle = {
    background: 'white',
    fontSize: 7.5,
    display: 'none',
  };

  return (
    <>
      {shops.map((shop) => (
        <Marker
          key={shop?.id}
          position={generateLatLngLiteralFromShop(shop)}
          onClick={() => showInfoWindow(shop)}
        />
      ))}
      <InfoWindow position={infoWindowPosition}>
        <div style={divStyle}>{infoWindowTitle}あい</div>
      </InfoWindow>
    </>
  );
};

export default MapInsideItems;
