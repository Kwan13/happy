import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';
import markerImg from '../../assets/map-marker.svg';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <img src={markerImg} alt="Happy" />

      <div>
        <Link to="/orphanages">
          <FiArrowLeft size={32} color="#fff" />
        </Link>
      </div>
    </Container>
  );
};

export default Sidebar;
