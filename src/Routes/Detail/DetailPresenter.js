import React from 'react';
import PropTypes from 'prop-types';
import { Container, Backdrop } from './style';
import { Loader } from '../../Components/Loader';

export const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https:/image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};
