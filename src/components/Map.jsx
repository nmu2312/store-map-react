import { useCallback, useState } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import MapInsideItems from 'components/MapInsideItems';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const Map = ({ shops, setMap, map }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDuhNYyC3TslC2abfS1ZGOx8hSAuptODs4',
  });

  const center = {
    lat: 35.409776993526116,
    lng: 136.75644950454605,
  };

  const onLoad = useCallback(
    (mapObj) => {
      setMap(mapObj);
    },
    [setMap]
  );

  const [isShown, setIsShown] = useState(false);
  const [infoWindowTitle, setInfoWindowTitle] = useState('');

  const onUnmount = useCallback(() => {
    setMap(null);
  }, [setMap]);

  const pan = () => {
    map?.panTo({ lat: 35.50461156824642, lng: 136.85881462186467 });
  };

  return isLoaded ? (
    <>
      <button type='button' onClick={pan}>
        pan
      </button>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <MapInsideItems shops={shops} map={map} />
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};

export default Map;
