import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/movies");
        setMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, []);

  const filterByGenre = (genre) => {
    return movies.filter((m) => m.genre === genre);
  };

  return (
    <div style={{ background: "#111", minHeight: "100vh", color: "white" }}>
      
      <h1 style={{ padding: "20px" }}>🎬 StreamFlix</h1>

      {/* Trending */}
      <Section title="🔥 Trending Now" movies={movies} />

      {/* Genres */}
      <Section title="🚀 Sci-Fi" movies={filterByGenre("Sci-Fi")} />
      <Section title="❤️ Action" movies={filterByGenre("Action")} />
      <Section title="😂 Comedy" movies={filterByGenre("Comedy")} />
      <Section title="⭐ Recently Added" movies={movies.slice(0, 5)} />

    </div>
  );
}

function Section({ title, movies }) {
  return (
    <div style={{ padding: "10px 20px" }}>
      <h2>{title}</h2>

      <div className="movie-grid" style={{
        display: "flex",
        overflowX: "auto",
        gap: "15px",
        padding: "10px 0"
      }}>
        {movies.length === 0 ? (
          <p>No movies</p>
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;