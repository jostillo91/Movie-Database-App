import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movieAPI from '../services/api';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await movieAPI.getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError('Failed to load movie details');
        console.error('Error fetching movie details:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          {error || 'Movie not found'}
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Go Back Home
        </button>
      </div>
    );
  }

  const formatCurrency = (amount) => {
    if (!amount) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatRuntime = (minutes) => {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="container mt-4">
      <button
        className="btn btn-outline-secondary mb-3"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="row">
        <div className="col-md-4 mb-4">
          <img
            src={movieAPI.getImageUrl(movie.poster_path, 'w500')}
            alt={movie.title}
            className="movie-details-poster"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/500x750?text=No+Image';
            }}
          />
        </div>
        <div className="col-md-8">
          <div className="detail-section">
            <h1 className="mb-3" style={{ color: '#0d253f' }}>
              {movie.title}
            </h1>
            {movie.tagline && (
              <p className="lead text-muted mb-3">"{movie.tagline}"</p>
            )}
            <div className="mb-3">
              <span className="badge bg-primary me-2">
                ⭐ {movie.vote_average?.toFixed(1)} / 10
              </span>
              <span className="badge bg-success me-2">
                {movie.vote_count} votes
              </span>
              {movie.release_date && (
                <span className="badge bg-info">
                  {new Date(movie.release_date).getFullYear()}
                </span>
              )}
            </div>
            <p className="mb-3">{movie.overview}</p>
            <div className="row mt-4">
              <div className="col-md-6">
                <p>
                  <strong>Runtime:</strong> {formatRuntime(movie.runtime)}
                </p>
                <p>
                  <strong>Budget:</strong> {formatCurrency(movie.budget)}
                </p>
                <p>
                  <strong>Revenue:</strong> {formatCurrency(movie.revenue)}
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <strong>Status:</strong> {movie.status}
                </p>
                <p>
                  <strong>Release Date:</strong>{' '}
                  {movie.release_date
                    ? new Date(movie.release_date).toLocaleDateString()
                    : 'N/A'}
                </p>
                <p>
                  <strong>Popularity:</strong> {movie.popularity?.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          {movie.genres && movie.genres.length > 0 && (
            <div className="detail-section">
              <h3 style={{ color: '#0d253f' }}>Genres</h3>
              <div>
                {movie.genres.map((genre) => (
                  <span key={genre.id} className="badge bg-secondary me-2 mb-2">
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {movie.production_companies &&
            movie.production_companies.length > 0 && (
              <div className="detail-section">
                <h3 style={{ color: '#0d253f' }}>Production Companies</h3>
                <div className="row">
                  {movie.production_companies.map((company) => (
                    <div key={company.id} className="col-md-4 mb-2">
                      <small>{company.name}</small>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {movie.credits && movie.credits.cast && (
            <div className="detail-section">
              <h3 style={{ color: '#0d253f' }}>Cast</h3>
              <div className="row">
                {movie.credits.cast.slice(0, 6).map((actor) => (
                  <div key={actor.id} className="col-md-4 mb-3">
                    <div className="d-flex align-items-center">
                      {actor.profile_path && (
                        <img
                          src={movieAPI.getImageUrl(actor.profile_path, 'w185')}
                          alt={actor.name}
                          className="rounded me-2"
                          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                          onError={(e) => {
                            e.target.src =
                              'https://via.placeholder.com/50?text=No+Image';
                          }}
                        />
                      )}
                      <div>
                        <strong>{actor.name}</strong>
                        <br />
                        <small className="text-muted">{actor.character}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

