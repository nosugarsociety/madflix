import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Loader } from '../../Components/Loader';
import { Section } from '../../Components/Section';
import { Error } from '../../Components/Error';

const Container = styled.div`
  padding: 0 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

export const SearchPresenter = ({
  movieResults,
  tvResults,
  loading,
  searchTerm,
  error,
  handleSubmit,
  updateTerm,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder='Search Movies or TV Shows'
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title='Movie Results'>
            {movieResults.map((item) => (
              <span key={item.id}>{item.title}</span>
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title='TV Show Results'>
            {tvResults.map((item) => (
              <span key={item.id}>{item.name}</span>
            ))}
          </Section>
        )}
        {error && <Error color='#e74c3c' text={error} />}
        {movieResults &&
          tvResults &&
          movieResults.length === 0 &&
          tvResults.length === 0 && <Error color='gray' text='Nothing found' />}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};
