import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 50px;

  ::not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 25px;
`;

export const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
`;
