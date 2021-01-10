import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const TVPresenter = ({
  topRated,
  popular,
  airingToday,
  error,
  loading,
}) => {
  return <h2>Tv</h2>;
};

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.string,
};
