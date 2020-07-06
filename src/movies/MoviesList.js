/* eslint react/no-did-mount-set-state: 0 */

import styled from 'styled-components';
import React, { PureComponent } from 'react';
import Movie from './Movie';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMovies } from './actions';

class MoviesList extends PureComponent {
  componentDidMount() {
    const { getMovies, isLoaded, moviesLoadedAt } = this.props;
    const oneHour = 60 * 60 * 1000;
    if (!isLoaded || new Date() - new Date(moviesLoadedAt) > oneHour) {
      getMovies();
    }
  }

  render() {
    const { movies } = this.props;
    return (
      <MovieGrid>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded,
  moviesLoadedAt: state.movies.moviesLoadedAt,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovies,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-row-gap: 1.5rem;
`;
