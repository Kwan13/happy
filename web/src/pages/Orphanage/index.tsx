import React, { useEffect, useState } from 'react';
import { FiClock, FiInfo } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { Marker } from 'react-leaflet';

import api from '../../services/api';

import Sidebar from '../../components/Sidebar';
import Map from '../../components/Map';
import whatsappIcon from '../../assets/whatsapp.svg';
import happyMapIcon from '../../components/Map/happyIcon';

import { Container, Content, Header, MapContainer } from './styles';

interface Orphanage {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  whatsapp: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: string;
    path: string;
  }>;
}

interface OrphanageParams {
  id: string;
}

const Orphanage: React.FC = () => {
  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    async function getOrphanage() {
      const response = await api.get(`orphanages/${params.id}`);

      setOrphanage(response.data);
    }

    getOrphanage();
  }, [params.id]);

  if (!orphanage) {
    return <p>carregando...</p>;
  }

  return (
    <Container>
      <Sidebar />
      <Content>
        <div>
          <Header>
            <img src={orphanage.images[activeImageIndex].path} alt="teste" />

            <div>
              {orphanage.images.map((image, index) => (
                <button
                  onClick={() => setActiveImageIndex(index)}
                  key={image.id}
                  type="button"
                >
                  <img src={image.path} alt={orphanage.name} />
                </button>
              ))}
            </div>
          </Header>

          <section>
            <h1>{orphanage?.name}</h1>
            <p>{orphanage?.about}</p>

            <MapContainer>
              <Map
                style={{ width: '100%', height: 227 }}
                center={[orphanage.latitude, orphanage.longitude]}
                interactive={false}
              >
                <Marker
                  icon={happyMapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </span>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className="instructions-container">
              <div className="open-details">
                <FiClock size={40} color="#15B6D6" />
                Horário de visitas <br />
                {orphanage.opening_hours}
              </div>

              {orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo />
                  Atendemos <br />
                  fim de semana.
                </div>
              ) : (
                <div className="dont-open-on-weekends">
                  <FiInfo />
                  Não atendemos <br />
                  fim de semana.
                </div>
              )}
            </div>

            <a
              target="blank"
              href={`https://api.whatsapp.com/send?phone=${orphanage.whatsapp}&text=Olá! gostaria de agendar uma visita.`}
            >
              <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
            </a>
          </section>
        </div>
      </Content>
    </Container>
  );
};

export default Orphanage;
