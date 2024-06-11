import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((m) => (
        <img src={m.Poster} alt="movie"></img>
      ))}
    </>
  );
};

export default MovieList;
