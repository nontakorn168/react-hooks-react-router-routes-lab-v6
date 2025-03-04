import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Movie not found");
        }
        return response.json();
      })
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1>{movie.title}</h1>
      <p>Duration: {movie.time} min</p>
      <div>
        <p>genre</p>
        {movie.genres && movie.genres.length > 0 ? (
          movie.genres.map((genre, index) => 
          <span key={index}>{genre}</span>)
        ) : (
          <p>No genres available.</p>
        )}
      </div>
    </div>
  );
}

export default Movie;
