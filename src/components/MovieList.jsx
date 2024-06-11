import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((m) => (
        <div className="image-container d-flex m-3" key={m.imdbID}>
          <img src={m.Poster} alt="movie"></img>
          <div className="overlay d-flex align-items-center justify-content-center">
            <span className="me-2">선호작 추가</span>
            <span>❤️</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
