import React from 'react';
import { HomePresenter } from './HomePresenter';
import { movieApi } from '../../api';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loading: true,
  };

  // fetch data
  // componentDidMount
  // try - catch(err) - finally
  // async / await  ==> wait for me until i finish something

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();

      console.log(nowPlaying);
      const {
        data: { results: upComing },
      } = await movieApi.upComing();
      console.log(upComing);
      const {
        data: { results: popular },
      } = await movieApi.popular();

      this.setState({
        nowPlaying,
        upComing,
        popular,
      });
    } catch (err) {
      console.log(`Movie fetch was not successful with ${err}`);
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    console.log('this.state-home', this.state);
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
