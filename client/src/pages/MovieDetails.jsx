import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get("http://https://streamflix-excj.onrender.com/api/movies");
        const found = res.data.find((m) => m._id === id);
        setMovie(found);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <h2 style={{ color: "white" }}>Loading...</h2>;

  return (
    <div style={{ background: "#111", color: "white", minHeight: "100vh" }}>
      
      {/* Hero Section */}
      <div
        style={{
          height: "60vh",
          backgroundImage: `url(${movie.poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
          }}
        >
          <h1>{movie.title}</h1>
          <p>{movie.genre} • {movie.year}</p>

          <div style={{ marginTop: "10px" }}>
            <a href={movie.videoUrl} target="_blank">
   <Link to={`/watch/${movie._id}`}>
  <button style={{ marginRight: "10px" }}>▶ Play</button>
</Link>
            </a>
          </div>
        </div>
      </div>

      {/* Description */}
      <div style={{ padding: "20px" }}>
        <h2>About</h2>
        <p>{movie.description}</p>
      </div>

    </div>
  );
}

export default MovieDetails;