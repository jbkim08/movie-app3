import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import ScrollContainer from "react-indiana-drag-scroll";

function App() {
  //영화 데이터 가져오기
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
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
  //시작시 선호작을 저장소에서 가져옴
  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem("favourites"));
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);
  //선호작을 추가하기 함수
  const addFavouriteMovie = (movie) => {
    const newList = [...favourites, movie]; //선호작에 새 영화 추가
    setFavourites(newList); //추가된 리스트 새로 저장
    localStorage.setItem("favourites", JSON.stringify(newList)); //저장소 저장
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row align-items-center my-4">
        <MovieListHeading heading="영화 검색과 선호작 등록" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <ScrollContainer className="row scroll-container">
        <MovieList movies={movies} handleClick={addFavouriteMovie} />
      </ScrollContainer>

      <div className="row align-items-center my-4">
        <MovieListHeading heading="내 선호작" />
      </div>

      <ScrollContainer className="row scroll-container">
        <MovieList movies={favourites} />
      </ScrollContainer>
    </div>
  );
}

export default App;
