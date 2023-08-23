import WatchedMovie from "./WatchedMovie";

const WatchedList = ({ watched }) => {
  return (
    <div>
      <ul className="list">
        {watched.map((movie) => (
          <WatchedMovie movie={movie} key={movie.imdbID} />
        ))}
      </ul>
    </div>
  );
};
export default WatchedList;
