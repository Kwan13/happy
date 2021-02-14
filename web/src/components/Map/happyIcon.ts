import leaflef from 'leaflet';

import markerImg from '../../assets/map-marker.svg';

const happyMapIcon = leaflef.icon({
  iconUrl: markerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

export default happyMapIcon;
