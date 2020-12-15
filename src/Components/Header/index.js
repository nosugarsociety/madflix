import React from 'react';
import { withRouter } from 'react-router-dom';
import { HeaderContainer, List, Item, ItemLink } from './style';

const Header = ({ location: { pathname } }) => {
  return (
    <HeaderContainer>
      <List>
        <Item current={pathname === '/'}>
          <ItemLink to='/movies'>Movies</ItemLink>
        </Item>
        <Item current={pathname === '/tv'}>
          <ItemLink to='/tv'>TV</ItemLink>
        </Item>
        <Item current={pathname === '/search'}>
          <ItemLink to='/search'>Search</ItemLink>
        </Item>
      </List>
    </HeaderContainer>
  );
};

export default withRouter(Header);
