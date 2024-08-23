import axios from "axios";
import { useState, useEffect } from "react";
import MovieCards from "../components/MovieCards";

function Tv() {
  const [movie, setMovie] = useState({
    isFetched: false,
    data: {},
    err: false,
  });

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      })
      .then((res) =>
        setMovie({
          isFetched: true,
          data: res.data,
          err: false,
        })
      )
      .catch((error) =>
        setMovie({
          isFetched: true,
          data: [],
          err: error,
        })
      );
  }, []);

  console.log(movie);

  return (
    <div>
      {movie.isFetched ? (
        <div className="wrapper">
          {movie.data.results.map((movie, index) => {
            return (
              <MovieCards
                id={movie.id}
                key={index}
                img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                title={movie.title}
                date={movie.release_date}
              />
            );
          })}
        </div>
      ) : (
        <h1>Loading . . .</h1>
      )}
    </div>
  );
}

export default Tv;
