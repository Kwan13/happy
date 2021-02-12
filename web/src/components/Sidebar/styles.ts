import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  width: 96px;
  height: 100vh;
  background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);
  padding: 40px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  a {
    width: 48px;
    height: 48px;
    background: #12afcb;
    border-radius: 16px;
    margin-top: 500px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background 0.2s;

    &:hover {
      background: #17d6eb;
    }
  }
`;
