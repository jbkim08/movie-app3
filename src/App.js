import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

function App() {
  //영화 데이터 가져오기
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  //검색어로 영화데이터 요청
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?apikey=6bfc4a64&s=${searchValue}`;
    const response = await fetch(url); //영화서버에서 제이슨데이터를 받음
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  //검색어가 바뀌면 새로 검색한다! (최소 3문자 이상)
  useEffect(() => {
    if (searchValue.length > 2) {
      getMovieRequest(searchValue);
    }
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row align-items-center my-4">
        <MovieListHeading heading="제목" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
