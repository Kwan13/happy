import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  margin-top: 108px;

  > div {
    width: 100%;
    max-width: 708px;
    background: #fff;
    border-radius: 20px;
    margin: 0 auto;

    section {
      padding: 0 80px 80px;

      h1 {
        color: #4d6f80;
        font-weight: 700;
        font-size: 54px;
        line-height: 54px;
        margin-bottom: 32px;
      }

      p {
        color: #5c8599;
        font-size: 18px;
        line-height: 28px;
      }

      hr {
        border: 0;
        border-top: 1px solid #d3e2e5;
        margin: 64px 0;
      }

      h2 {
        color: #4d6f80;
        font-weight: 700;
        font-size: 36px;
        line-height: 46px;
        margin-bottom: 24px;
      }

      .instructions-container {
        margin-top: 24px;

        display: flex;
        justify-content: space-between;
      }

      .open-details {
        width: 264px;
        height: 176px;
        background: linear-gradient(149.97deg, #e6f7fb 8.13%, #ffffff 92.67%);
        border: 1px solid #b3dae2;
        border-radius: 20px;
        padding: 32px 24px;
        color: #5c8599;

        svg {
          display: block;
          margin-bottom: 16px;
        }
      }

      .open-on-weekends {
        width: 264px;
        height: 176px;
        background: linear-gradient(154.16deg, #edfff6 7.85%, #ffffff 91.03%);
        border: 1px solid #a1e9c5;
        border-radius: 20px;
        padding: 32px 24px;
        color: #37c77f;

        svg {
          font-size: 40px;
          color: #39cc83;

          display: block;
          margin-bottom: 16px;
        }
      }

      .dont-open-on-weekends {
        width: 264px;
        height: 176px;
        background: linear-gradient(154.16deg, #fcf0f4 7.85%, #ffffff 91.03%);
        border: 1px solid #ffbcd4;
        border-radius: 20px;
        padding: 32px 24px;
        color: #ff669d;

        svg {
          font-size: 40px;
          color: #ff669d;

          display: block;
          margin-bottom: 16px;
        }
      }

      button {
        width: 100%;
        height: 64px;
        border: 0;
        border-radius: 20px;
        color: #fff;
        background: #3cdc8c;
        font-weight: 800;
        font-size: 18px;
        line-height: 26px;
        margin-top: 64px;

        display: flex;
        align-items: center;
        justify-content: center;

        img {
          margin-right: 15px;
        }
      }
    }
  }
`;

export const Header = styled.header`
  margin-bottom: 64px;

  > img {
    width: 100%;
    height: 336px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    gap: 15px;
    margin-top: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 94px;
      height: 94px;
      border: 0;
      border-radius: 20px;

      img {
        width: 94px;
        height: 94px;
        object-fit: cover;
        border-radius: 20px;
      }
    }
  }
`;

export const MapContainer = styled.div`
  background: #e6f7fb;
  border-radius: 20px;
  margin-top: 64px;

  span {
    height: 64px;

    display: flex;
    align-items: center;
    justify-content: center;

    a {
      text-decoration: none;
      color: #0089a5;
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
    }
  }

  .leaflet-container {
    border-radius: 20px;
  }
`;
