import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((m) => (
        <div className="d-flex m-3" key={m.imdbID}>
          <img src={m.Poster} alt="movie"></img>
        </div>
      ))}
    </>
  );
};

export default MovieList;
