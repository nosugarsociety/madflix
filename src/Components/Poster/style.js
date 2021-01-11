import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  font-size: 12px;
`;

export const Rating = styled.span`
  position: absolute;
  bottom: 5px;
  right: 0;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

export const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

export const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }

    ${Rating} {
      opacity: 1;
    }
  }
`;

export const Title = styled.span`
  display: block;
  font-size: 12px;
  margin-bottom: 3px;
`;

export const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;
