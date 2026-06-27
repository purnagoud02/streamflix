import { useState } from "react";
import axios from "axios";

function AddMovie() {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    genre: "",
    trailer: "",
    year: "",
    posterUrl: "",
    videoUrl: "",
  });

  const changeHandler = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://https://streamflix-excj.onrender.com/api/movies", {
        title: movie.title,
        description: movie.description,
        genre: movie.genre,
        trailer: movie.trailer,
        year: movie.year,
        poster: movie.posterUrl,
        videoUrl: movie.videoUrl,
      });

      alert("🎉 Movie Added Successfully!");

      setMovie({
        title: "",
        description: "",
        genre: "",
        trailer: "",
        year: "",
        posterUrl: "",
        videoUrl: "",
      });

    } catch (error) {
      console.log(error);
      alert("Failed to add movie");
    }
  };

  return (
    <div style={{ background: "#141414", color: "white", padding: "20px" }}>
      <h1>🎬 Add Movie</h1>

      <form onSubmit={submitHandler}>
        <input name="title" placeholder="Title" value={movie.title} onChange={changeHandler} />
        <br /><br />

        <input name="genre" placeholder="Genre" value={movie.genre} onChange={changeHandler} />
        <br /><br />

        <input name="year" placeholder="Year" value={movie.year} onChange={changeHandler} />
        <br /><br />

        <input name="posterUrl" placeholder="Poster URL" value={movie.posterUrl} onChange={changeHandler} />
        <br /><br />

        <input name="videoUrl" placeholder="Video URL" value={movie.videoUrl} onChange={changeHandler} />
        <br /><br />

        <input name="trailer" placeholder="Trailer URL" value={movie.trailer} onChange={changeHandler} />
        <br /><br />

        <textarea name="description" placeholder="Description" value={movie.description} onChange={changeHandler} />
        <br /><br />

        <button type="submit">➕ Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;