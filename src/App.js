import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  //영화 데이터 가져오기
  const [movies, setMovies] = useState([
    {
      Title: "The Amazing Spider-Man",
      Year: "2012",
      imdbID: "tt0948470",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
    },
    {
      Title: "The Amazing Spider-Man 2",
      Year: "2014",
      imdbID: "tt1872181",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg",
    },
    {
      Title: "The Amazing World of Gumball",
      Year: "2011–2019",
      imdbID: "tt1942683",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWU1YTA4OGUtNjcxMC00ZTllLTgxYWUtY2U5NmViZTU0MmNjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_SX300.jpg",
    },
  ]);
  //검색어로 영화데이터 요청
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?apikey=6bfc4a64&s=${searchValue}`;
    const response = await fetch(url); //영화서버에서 제이슨데이터를 받음
    const responseJson = await response.json();
    console.log(responseJson);
  };
  getMovieRequest("amazing");

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
