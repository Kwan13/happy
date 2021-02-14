import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <header>
          <img src={logoImg} alt="Happy" />

          <div>
            <strong>Itaquaquecetuba</strong>
            <span>São Paulo</span>
          </div>
        </header>

        <div>
          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </main>

          <Link to="/app">
            <FiArrowRight size={32} color="#8D734B" />
          </Link>
        </div>
      </Content>
    </Container>
  );
};

export default Landing;
