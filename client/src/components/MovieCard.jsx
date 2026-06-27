import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  if (!movie) return null;

  return (
    <Link
      to={`/movie/${movie._id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="movie-card">
        <img src={movie.poster} alt={movie.title} />

        <div className="movie-overlay">
          <h3>{movie.title}</h3>
          <p>{movie.genre}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;