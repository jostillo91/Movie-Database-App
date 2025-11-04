import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import movieAPI from '../services/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const [trendingData, popularData] = await Promise.all([
          movieAPI.getTrendingMovies('day'),
          movieAPI.getPopularMovies(1),
        ]);
        setTrendingMovies(trendingData.results || []);
        setPopularMovies(popularData.results || []);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError(
          error.response?.status === 401
            ? 'API key is invalid or missing. Please check your configuration.'
            : 'Failed to load movies. Please try again later.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="page-title">Welcome to MovieDB</h1>
      
      {error && (
        <div className="alert alert-danger" role="alert">
          <strong>Error:</strong> {error}
          <br />
          <small>Check the browser console for more details.</small>
        </div>
      )}
      
      <section className="mb-5">
        <h2 className="mb-4" style={{ color: '#0d253f' }}>
          🔥 Trending Today
        </h2>
        <MovieList movies={trendingMovies.slice(0, 8)} loading={loading} />
      </section>

      <section className="mb-5">
        <h2 className="mb-4" style={{ color: '#0d253f' }}>
          ⭐ Popular Movies
        </h2>
        <MovieList movies={popularMovies.slice(0, 8)} loading={loading} />
      </section>
    </div>
  );
};

export default Home;

