import { Link } from "react-router-dom";
import React from "react";
function MovieCard({ movie }) {
  return (
    <article>
      <h2>{movie.title}</h2>
      {/* Dynamic routing to the Movie page */}
      <Link to={`/movie/${movie.id}`}>View Movie</Link>
    </article>
  );
}

export default MovieCard;
