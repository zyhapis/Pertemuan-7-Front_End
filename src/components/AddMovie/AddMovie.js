// AddMovie.js
import React, { useState } from "react";
import styles from "./AddMovie.module.css";
import DataGenre from "../../utils/constants/DataGenre";

const AddMovie = (props) => {
  const { movie, setMovie } = props;

  const [titleError, setTitleError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [genreError, setGenreError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleImageUrl = (e) => {
    setImageUrl(e.target.value);
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || date === "" || imageUrl === "" || genre === "") {
      alert("Harap isi semua kolom terlebih dahulu.");
    } else {
      const newMovie = {
        id: movie.length + 1,
        title: title,
        image: imageUrl,
        genre: genre,
        date: date,
      };
      setMovie([...movie, newMovie]);
      setTitle("");
      setImageUrl("");
      setGenre("");
      setDate("");
      setTitleError(false);
      setImageError(false);
      setGenreError(false);
      setDateError(false);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.addmovie} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} htmlFor="title">
            Judul:
          </label>
          <input
            className={styles.addmovie__input}
            id="title"
            type="text"
            value={title}
            onChange={handleTitle}
            placeholder="Isi judul sesuai Movie"
          />
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} htmlFor="imageUrl">
            Image URL:
          </label>
          <input
            className={styles.addmovie__input}
            id="imageUrl"
            type="text"
            value={imageUrl}
            onChange={handleImageUrl}
            placeholder="Isi Image URL"
          />
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} htmlFor="genreSelect">
            Genre:
          </label>
          <select
            className={styles.genreSelect}
            id="genreSelect"
            value={genre}
            onChange={handleGenre}
          >
            {DataGenre.map((genreOption, index) => (
              <option key={index} value={genreOption}>
                {genreOption}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} htmlFor="date">
            Tanggal Rilis:
          </label>
          <input
            className={styles.addmovie__input}
            id="date"
            type="date"
            value={date}
            onChange={handleDate}
          />
        </div>

        <button className={styles.addmovie__button}>Simpan</button>
      </form>
    </div>
  );
};

export default AddMovie;

