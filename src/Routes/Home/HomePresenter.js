import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Section } from '../../Components/Section';

const Container = styled.div`
  padding: 0 10px;
`;

export const HomePresenter = ({
  nowPlaying,
  upcoming,
  popular,
  error,
  loading,
}) => {
  return (
    <div>
      <h1>home presenter</h1>
    </div>
  );
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};
