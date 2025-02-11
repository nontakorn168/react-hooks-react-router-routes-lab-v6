import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch Actors");
      }
     return response.json();
    })
    .then((data) => {
      setActors(data);
      setLoading(false);
    })
  },[]);



  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <article key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
      </main>
    </>
  );
};

export default Actors;
