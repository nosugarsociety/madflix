import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const SearchPresenter = ({
  movieResults,
  tvResults,
  loading,
  searchTerm,
  error,
  handleSubmit,
}) => null;

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};
