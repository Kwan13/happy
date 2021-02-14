import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  margin-top: 108px;

  form {
    width: 100%;
    max-width: 708px;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    background: #fff;
    margin: 0 auto;
    padding: 80px;
    color: #8fa7b2;

    fieldset {
      border: none;

      legend {
        width: 100%;
        color: #4d6f80;
        font-weight: 700;
        font-size: 32px;
        line-height: 34px;
        padding-bottom: 24px;
        border-bottom: 1px solid #d3e2e5;
        margin-bottom: 40px;
      }

      > label {
        display: block;
        margin: 24px 0 8px;
      }

      .content-input-file {
        width: 96px;
        height: 96px;
        background: #f5f8fa;
        border: 1px dashed #96d2f0;
        border-radius: 20px;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      .images-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 16px;

        img {
          width: 100%;
          height: 96px;
          object-fit: cover;
          border-radius: 20px;
        }
      }

      .content-button-group {
        display: flex;

        button {
          flex: 1;
          height: 64px;
          border: 1px solid #d3e2e5;
          border-radius: 20px 0 0 20px;
          background: #f5f8fa;

          & + button {
            border-radius: 0 20px 20px 0;
            border-left: 0;
          }
        }

        .content-button-group-active {
          background: #edfff6;
          border: 1px solid #a1e9c5;
          color: #37c77f;
        }
      }
    }
  }
`;

export const MapContainer = styled.div`
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  span {
    width: 100%;
    height: 48px;
    background: #f5f8fa;
    color: #0089a5;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 20px 20px;
  }

  .leaflet-container {
    border-radius: 20px 20px 0 0;
  }
`;
