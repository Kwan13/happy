import styled from 'styled-components';

import landingImg from '../../assets/landing.svg';
import landingMobile from '../../assets/landing-mobile.svg';

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 700px;
  max-width: 1100px;
  padding: 0 10px;
  background: url(${landingImg}) no-repeat 80% center;

  @media screen and (max-width: 600px) {
    background: url(${landingMobile}) no-repeat 120% center;
  }

  header {
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      color: #fff;

      strong {
        font-size: 20px;
      }

      span {
        display: block;
        text-align: right;
      }
    }
  }

  > div {
    display: flex;
    justify-content: space-between;

    main {
      width: 290px;
      margin-top: 108px;

      h1 {
        color: #fff;
        font-size: 76px;
        line-height: 70px;
        font-weight: 900;
      }

      p {
        color: #fff;
        font-size: 24px;
        line-height: 34px;
        margin-top: 40px;
      }
    }

    a {
      width: 80px;
      height: 80px;
      background: #ffd666;
      border-radius: 30px;
      margin-top: auto;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;

      &:hover {
        background: #96feff;
      }
    }
  }
`;
