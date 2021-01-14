import React from 'react';
import { tvApi } from '../../api';
import { movieApi } from '../../api';
import { DetailPresenter } from './DetailPresenter';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes('/movie'),
    };
  }

  async componentDidMount() {
    console.log('tp', this.props);
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
      return push('/');
    }

    let result = null;

    try {
      if (isMovie) {
        const request = await movieApi.movieDetail(parsedId);
        result = request.data;
      } else {
        const request = await tvApi.showDetail(parsedId);
        result = request.data;
      }
    } catch {
      this.setState({ error: "Can't find anything!" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    console.log('this.props:', this.props);
    console.log('this.state:', this.state);
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
