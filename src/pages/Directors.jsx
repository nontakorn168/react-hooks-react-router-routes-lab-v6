import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";


function Directors() {
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch directors data");
        }
        return response.json();
      })
      .then((data) => {
        setDirectors(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);



  return (

    <div>
      <header>
        <NavBar />
      </header>
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;
