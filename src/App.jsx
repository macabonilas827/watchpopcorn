import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Search from "./components/navbar/Search";
import Result from "./components/navbar/Result";
import Box from "./components/main/Box";
import MovieList from "./components/main/MovieList";
import WatchedSummary from "./components/main/WatchedSummary";
import WatchedList from "./components/main/WatchedList";
import { tempMovieData } from "./data/tempMovieData";
import { tempWatchedData } from "./data/tempWatchedData";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <Navbar>
        <Search />
        <Result movies={movies} />
      </Navbar>

      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
