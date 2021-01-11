import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Section } from '../../Components/Section';
import { movieApi } from '../../api';
import { Error } from '../../Components/Error';
import { Poster } from '../../Components/Poster';

const Container = styled.div`
  padding: 0 20px;
`;

export const HomePresenter = ({
  nowPlaying,
  upComing,
  popular,
  error,
  loading,
}) =>
  loading ? null : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title='Now Playing'>
          {nowPlaying.map((item) => (
            <Poster />
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title='Upcoming Movies'>
          {upComing.map((item) => (
            <Poster />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title='Popular Movies'>
          {popular.map((item) => (
            <Poster />
          ))}
        </Section>
      )}
      {error && <Error color='#e74c3c' text={error} />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};
