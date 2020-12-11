import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%inherit;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  width: 100px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? '#3498db' : 'transparent')};
  transition: border-bottom 0.5s ease-in-out;
`;

export const ItemLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
