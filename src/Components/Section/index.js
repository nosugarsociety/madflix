import React from 'react';
import PropTypes, { any } from 'prop-types';
import { Container, Title, Grid } from './style';

export const Section = ({ title, children }) => {
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>;
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: any,
};
