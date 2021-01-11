import React from 'react';
import { SearchPresenter } from './SearchPresenter';
import { movieApi, tvApi } from '../../api';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    loading: false,
    searchTerm: '',
    error: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    this.searchByTerm(searchTerm);
  };

  updateTerm = (e) => {
    const {
      target: { value },
    } = e;
    this.setState({
      searchTerm: value,
    });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });

    const {
      data: { results: movieResults },
    } = await movieApi.search(searchTerm);
    const {
      data: { results: tvResults },
    } = await tvApi.search(searchTerm);

    try {
      this.setState({ loading: true });
      this.setState({ movieResults, tvResults });
    } catch (err) {
      this.setState({ error: "Can't find results!" });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, loading, searchTerm, error } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        loading={loading}
        searchTerm={searchTerm}
        error={error}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
