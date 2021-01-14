import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Backdrop,
  Content,
  Cover,
  Data,
  Title,
  ItemContainer,
  Item,
  Divider,
  Overview,
} from './style';
import { Loader } from '../../Components/Loader';

export const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https:/image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https:/image.tmdb.org/t/p/original${result.poster_path}`
              : require('../../assets/noimage.png')
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Item>
              {result.genres &&
                result.genres.map((item, index) =>
                  index === result.genres.length - 1
                    ? item.name
                    : `${item.name} /`
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};
