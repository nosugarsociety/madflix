import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Section } from '../../Components/Section';
import { Loader } from '../../Components/Loader';
import { Error } from '../../Components/Error';
import { Poster } from '../../Components/Poster';

const Container = styled.div`
  paddin: 0 20px;
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
          {topRated.map((item) => (
            <Poster
              key={item.id}
              id={item.id}
              ddd
              imageUrl={item.poster_path}
              title={item.original_name}
              isMovie={false}
              rating={item.vote_average}
              year={item.first_air_date && item.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title='Popular Shows'>
          {popular.map((item) => (
            <Poster
              key={item.id}
              id={item.id}
              ddd
              imageUrl={item.poster_path}
              title={item.original_name}
              isMovie={false}
              rating={item.vote_average}
              year={item.first_air_date && item.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title='AiringToday Shows'>
          {airingToday.map((item) => (
            <Poster
              key={item.id}
              id={item.id}
              ddd
              imageUrl={item.poster_path}
              title={item.original_name}
              isMovie={false}
              rating={item.vote_average}
              year={item.first_air_date && item.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {error && <Error color='#e74c3c' text={error} />}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.string,
};
