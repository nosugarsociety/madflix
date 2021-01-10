import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Section } from '../../Components/Section';
import { Loader } from '../../Components/Loader';

const Container = styled.div`
  paddin: 0 10px;
`;

export const TVPresenter = ({
  topRated,
  popular,
  airingToday,
  error,
  loading,
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title='Top Rated Shows'>
          {topRated.map((item) => item.name)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title='Popular Shows'>
          {popular.map((item) => item.name)}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title='AiringToday Shows'>
          {airingToday.map((item) => item.name)}
        </Section>
      )}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.string,
};
