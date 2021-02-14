import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

import Map from '../../components/Map';
import happyMapIcon from '../../components/Map/happyIcon';

import { Container } from './styles';
import markerImg from '../../assets/map-marker.svg';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <aside>
        <div>
          <img src={markerImg} alt="Happy" />

          <h1>Escolha um orfanato no mapa</h1>
          <p>Muitas crianças estão esperando sua visita :)</p>

          <strong>Itaquaquecetuba</strong>
          <span>São Paulo</span>
        </div>
      </aside>

      <div>
        <Map>
          <Marker icon={happyMapIcon} position={[-23.4737548, -46.3178326]}>
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              Lar das meninas
              <Link to="/orphanages/1">
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        </Map>

        <Link to="/orphanages/create">
          <FiPlus size={32} color="#fff" />
        </Link>
      </div>
    </Container>
  );
};

export default OrphanagesMap;
