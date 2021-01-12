import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;
