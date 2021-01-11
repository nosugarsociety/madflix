import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: gray;
`;

export const NotFound = ({ text }) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);

NotFound.propTypes = {
  text: PropTypes.string.isRequired,
};
