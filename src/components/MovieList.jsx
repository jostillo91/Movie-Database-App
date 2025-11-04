import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, loading }) => {
  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">🎬</div>
        <h3>No movies found</h3>
        <p>Try searching for something else or browse popular movies.</p>
      </div>
    );
  }

  return (
    <div className="row">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;

