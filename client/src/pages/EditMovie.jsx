import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({
    title: "",
    genre: "",
    year: "",
    poster: "",
    trailer: "",
    videoUrl: "",
    description: "",
  });

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      const { data } = await axios.get(
        `http://https://streamflix-excj.onrender.com/api/movies/${id}`
      );

      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://https://streamflix-excj.onrender.com/api/movies/${id}`,
        movie
      );

      alert("Movie Updated Successfully!");

      navigate("/admin/movies");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="container">
      <h1>Edit Movie</h1>

      <form onSubmit={submitHandler}>
        <input
          name="title"
          value={movie.title}
          onChange={changeHandler}
          placeholder="Title"
        />

        <input
          name="genre"
          value={movie.genre}
          onChange={changeHandler}
          placeholder="Genre"
        />

        <input
          name="year"
          value={movie.year}
          onChange={changeHandler}
          placeholder="Year"
        />

        <input
          name="poster"
          value={movie.poster}
          onChange={changeHandler}
          placeholder="Poster URL"
        />

        <input
          name="trailer"
          value={movie.trailer}
          onChange={changeHandler}
          placeholder="Trailer URL"
        />

        <input
          name="videoUrl"
          value={movie.videoUrl}
          onChange={changeHandler}
          placeholder="Video URL"
        />

        <textarea
          rows="5"
          name="description"
          value={movie.description}
          onChange={changeHandler}
          placeholder="Description"
        />

        <br />
        <br />

        <button type="submit">
          Update Movie
        </button>
      </form>
    </div>
  );
}

export default EditMovie;