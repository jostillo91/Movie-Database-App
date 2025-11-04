import React from 'react';
import { useNavigate } from 'react-router-dom';
import movieAPI from '../services/api';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card movie-card h-100" onClick={handleClick}>
        <img
          src={movieAPI.getImageUrl(movie.poster_path)}
          alt={movie.title}
          className="movie-poster"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/500x750?text=No+Image';
          }}
        />
        <div className="movie-card-body">
          <h5 className="movie-title">{movie.title}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <span className="movie-rating">
              ⭐ {movie.vote_average?.toFixed(1) || 'N/A'}
            </span>
            <small className="text-muted">
              {movie.release_date?.split('-')[0] || 'N/A'}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

