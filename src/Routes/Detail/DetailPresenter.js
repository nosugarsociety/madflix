import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const DetailPresenter = ({ result, error, loading }) => 'Detail';

DetailPresenter.propTypes = {
  result: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};
