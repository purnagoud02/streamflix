import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Banner() {
  const [movie, setMovie] =useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then((res) => {
        if (res.data.length > 0) {
          setMovie(res.data[0]);
        }
      });
  }, []);

  if (!movie) return null;

  const poster = movie.poster.startsWith("/uploads")
    ? `http://localhost:5000${movie.poster}`
    : movie.poster;

  return (
    <div
      style={{
     height: "70vh",
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,.85), rgba(0,0,0,.3)), url(${poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        paddingLeft: "80px",
      }}
    >
      <div style={{ maxWidth: "550px" }}>
        <h1
          style={{
            fontSize: "70px",
            marginBottom: "20px",
            color: "white",
          }}
        >
          {movie.title}
        </h1>

        <p
          style={{
            color: "#ddd",
            fontSize: "22px",
            lineHeight: "35px",
          }}
        >
          {movie.description}
        </p>

        <div
          style={{
            marginTop: "35px",
            display: "flex",
            gap: "20px",
          }}
        >
          <Link to={`/watch/${movie._id}`}>
            <button
              style={{
                background: "#fff",
                color: "#000",
                padding: "15px 35px",
                border: "none",
                borderRadius: "6px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ▶ Play
            </button>
          </Link>

          <Link to={`/movie/${movie._id}`}>
            <button
              style={{
                background: "#444",
                color: "#fff",
                padding: "15px 35px",
                border: "none",
                borderRadius: "6px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ℹ More Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;