import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MapOptions } from 'leaflet';

import 'leaflet/dist/leaflet.css';

interface MapProps extends MapOptions {
  interactive?: boolean;
}

const Map: React.FC<MapProps> = ({
  children,
  interactive = true,
  ...props
}) => {
  return (
    <MapContainer
      center={[-23.4737548, -46.3178326]}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
      dragging={interactive}
      touchZoom={interactive}
      zoomControl={interactive}
      scrollWheelZoom={interactive}
      doubleClickZoom={interactive}
      {...props}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {children}
    </MapContainer>
  );
};

export default Map;
