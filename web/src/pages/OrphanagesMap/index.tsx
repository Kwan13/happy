import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

import api from '../../services/api';

import Map from '../../components/Map';
import happyMapIcon from '../../components/Map/happyIcon';

import { Container } from './styles';
import markerImg from '../../assets/map-marker.svg';

interface Orphanages {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanages[]>([]);

  useEffect(() => {
    async function getOrphanages() {
      const response = await api.get('/orphanages');

      setOrphanages(response.data);
    }

    getOrphanages();
  }, []);

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
          {orphanages.map(orphanage => (
            <Marker
              key={orphanage.id}
              icon={happyMapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          ))}
        </Map>

        <Link to="/orphanages/create">
          <FiPlus size={32} color="#fff" />
        </Link>
      </div>
    </Container>
  );
};

export default OrphanagesMap;
