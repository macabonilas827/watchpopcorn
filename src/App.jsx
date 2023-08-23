import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Search from "./components/navbar/Search";
import Result from "./components/navbar/Result";
import MovieBox from "./components/main/MovieBox";
import WatchedBox from "./components/main/WatchedBox";
import { tempMovieData } from "./data/tempMovieData";
import MovieList from "./components/main/MovieList";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <Navbar>
        <Search />
        <Result movies={movies} />
      </Navbar>

      <Main>
        <MovieBox>
          <MovieList movies={movies} />
        </MovieBox>
        <WatchedBox />
      </Main>
    </>
  );
}
