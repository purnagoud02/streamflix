import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function WatchMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/movies/${id}`
        );

        console.log("MOVIE DATA:", res.data); // 👈 DEBUG LINE

        setMovie(res.data);
      } catch (err) {
        console.log("Error:", err);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <h2 style={{ color: "white" }}>Loading...</h2>;

  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "white" }}>
      <h2 style={{ padding: "20px" }}>{movie.title}</h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <video
          width="80%"
          controls
          autoPlay
          src={movie.videoUrl}
        />
      </div>

      <p style={{ padding: "20px" }}>{movie.description}</p>
    </div>
  );
}

export default WatchMovie;