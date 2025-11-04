import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../components/MovieList';
import movieAPI from '../services/api';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (query) {
      const fetchSearchResults = async () => {
        try {
          setLoading(true);
          const data = await movieAPI.searchMovies(query, page);
          setMovies(data.results || []);
          setTotalPages(data.total_pages || 1);
        } catch (error) {
          console.error('Error searching movies:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchSearchResults();
    } else {
      setMovies([]);
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  return (
    <div className="container mt-4">
      <h1 className="page-title">
        {query ? `Search Results for "${query}"` : 'Search Movies'}
      </h1>
      {query ? (
        <>
          <MovieList movies={movies} loading={loading} />
          {!loading && movies.length > 0 && (
            <div className="d-flex justify-content-center mt-4 mb-4">
              <nav>
                <ul className="pagination">
                  <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => setPage(page - 1)}
                      disabled={page === 1}
                    >
                      Previous
                    </button>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">{page}</span>
                  </li>
                  <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => setPage(page + 1)}
                      disabled={page === totalPages}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">🔍</div>
          <h3>Start searching for movies</h3>
          <p>Use the search bar in the navigation to find your favorite movies.</p>
        </div>
      )}
    </div>
  );
};

export default Search;

