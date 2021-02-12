import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  aside {
    width: 100%;
    max-width: 440px;
    height: 100vh;
    background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    div {
      width: 233px;

      h1 {
        margin-top: 80px;
        font-weight: 800;
        font-size: 40px;
        line-height: 42px;
      }

      p {
        margin-top: 24px;
        line-height: 28px;
        margin-bottom: 246px;
      }

      strong {
        font-size: 20px;
      }

      span {
        display: block;
      }
    }
  }

  > div {
    width: 100%;
    height: 100vh;

    .leaflet-container {
      z-index: 5;
    }

    > a {
      position: absolute;
      border: 0;
      right: 40px;
      bottom: 40px;
      width: 64px;
      height: 64px;
      background: #15c3d6;
      border-radius: 20px;

      display: flex;
      justify-content: center;
      align-items: center;

      z-index: 10;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: #17d6eb;
      }
    }
  }

  .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
    border-radius: 20px;
  }

  .map-popup .leaflet-popup-content {
    color: #0089a5;
    font-size: 20px;
    font-weight: 700;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .map-popup .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: #15c3d6;
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map-popup .leaflet-popup-tip-container {
    top: 50%;
    left: 0;
  }

  .map-popup .leaflet-popup-tip {
    display: none;
  }
`;
