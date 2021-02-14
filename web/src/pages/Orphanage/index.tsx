import React from 'react';
import { FiClock, FiInfo } from 'react-icons/fi';

import Sidebar from '../../components/Sidebar';
import Map from '../../components/Map';
import whatsappIcon from '../../assets/whatsapp.svg';

import { Container, Content, Header, MapContainer } from './styles';

const Orphanage: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <div>
          <Header>
            <img
              src="https://i.pinimg.com/originals/ee/95/bd/ee95bdb0cc1477116f3bac72c157d58c.jpg"
              alt="teste"
            />

            <div>
              <button type="button">
                <img
                  src="https://i.pinimg.com/originals/ee/95/bd/ee95bdb0cc1477116f3bac72c157d58c.jpg"
                  alt="teste"
                />
              </button>
              <button type="button">
                <img
                  src="https://i.pinimg.com/originals/ee/95/bd/ee95bdb0cc1477116f3bac72c157d58c.jpg"
                  alt="teste"
                />
              </button>
              <button type="button">
                <img
                  src="https://i.pinimg.com/originals/ee/95/bd/ee95bdb0cc1477116f3bac72c157d58c.jpg"
                  alt="teste"
                />
              </button>
              <button type="button">
                <img
                  src="https://i.pinimg.com/originals/ee/95/bd/ee95bdb0cc1477116f3bac72c157d58c.jpg"
                  alt="teste"
                />
              </button>
              <button type="button">
                <img
                  src="https://i.pinimg.com/originals/ee/95/bd/ee95bdb0cc1477116f3bac72c157d58c.jpg"
                  alt="teste"
                />
              </button>
              <button type="button">
                <img
                  src="https://i.pinimg.com/originals/ee/95/bd/ee95bdb0cc1477116f3bac72c157d58c.jpg"
                  alt="teste"
                />
              </button>
            </div>
          </Header>

          <section>
            <h1>Orf.Esperança</h1>
            <p>
              Presta assistência a crianças de 06 a 15 anos que se encontre em
              situação de risco e/ou vulnerabilidade social.
            </p>

            <MapContainer>
              <Map style={{ width: '100%', height: 227 }} interactive={false} />
              <span>
                <a href="http://localhost:3333">Ver rotas no Google Maps</a>
              </span>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>
              Venha como se sentir a vontade e traga muito amor e paciência para
              dar.
            </p>

            <div className="instructions-container">
              <div className="open-details">
                <FiClock size={40} color="#15B6D6" />
                Horário de visitas <br />
                Das 18h até 8h
              </div>

              <div className="dont-open-on-weekends">
                <FiInfo />
                Horário de visitas <br />
                Das 18h até 8h
              </div>
            </div>

            <button type="button">
              <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
            </button>
          </section>
        </div>
      </Content>
    </Container>
  );
};

export default Orphanage;
