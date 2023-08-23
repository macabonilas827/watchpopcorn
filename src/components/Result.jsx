import { useState } from "react";
import { tempMovieData } from "../data/tempMovieData";

const Result = () => {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      {" "}
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </>
  );
};
export default Result;
