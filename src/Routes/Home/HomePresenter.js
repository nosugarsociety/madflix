import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Section } from '../../Components/Section';
import { movieApi } from '../../api';

const Container = styled.div`
  padding: 0 10px;
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
            <span key={item.id}>{item.title}</span>
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title='Upcoming Movies'>
          {upComing.map((item) => (
            <span key={item.id}>{item.title}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title='Popular Movies'>
          {popular.map((item) => (
            <span key={item.id}>{item.title}</span>
          ))}
        </Section>
      )}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};
