import styled from 'styled-components/macro';

export const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
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

export const Content = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 70vh;
`;

export const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
`;

export const Data = styled.div`
  width: 70%;
  margin-left: 2%;
`;

export const Title = styled.h1`
  font-size: 8vw;
`;

export const ItemContainer = styled.div`
  margin: 1em 0;
  font-size: 1.5rem;
`;

export const Item = styled.span`
  font-size: 1.5rem;

  &:last-of-type {
    &:after {
      display: none;
    }
  }

  &:after {
    display: inline-block;
    padding: 0 10px;
    content: '•';
  }
`;

export const Overview = styled.p`
  font-size: 3.5vw;
  width: 50%;
  opacity: 0.7;
`;
