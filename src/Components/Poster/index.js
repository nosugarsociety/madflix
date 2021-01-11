import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, ImageContainer, Title, Image, Rating, Year } from './style';

export const Poster = ({
  id,
  imageUrl,
  title,
  rating,
  year,
  isMovie = false,
}) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
      <Container>
        <ImageContainer>
          <Image
            bgUrl={
              imageUrl
                ? `https:/image.tmdb.org/t/p/w300${imageUrl}`
                : require('../../assets/noimage.png')
            }
          />
          <Rating>
            <span role='img' aria-label='rating'>
              ⭐
            </span>
            {rating}/10
          </Rating>
        </ImageContainer>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </Container>
    </Link>
  );
};

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool.isRequired,
};
