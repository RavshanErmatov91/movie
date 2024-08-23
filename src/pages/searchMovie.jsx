import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieCards from "../components/MovieCards";

const SearchList = () => {
  const { searchFilm } = useParams();
  //   console.log(match.params.searchQuery);

  const [SearchInfo, setSearchInfo] = useState({
    isFetched: false,
    data: {},
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?query=${searchFilm}`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      })
      .then((res) =>
        setSearchInfo({
          isFetched: true,
          data: res.data,
          err: false,
        })
      )
      .catch((error) =>
        setSearchInfo({
          isFetched: true,
          data: [],
          err: error,
        })
      );
  }, [searchFilm]);
  return (
    <div>
      {SearchInfo.isFetched ? (
        <div className="cards">
          {SearchInfo.data.results.length > 0 ? (
            SearchInfo.data.results.map((movie, index) => (
              <MovieCards
                key={index}
                id={movie.id}
                rating={movie.vote_average}
                title={movie.title}
                date={movie.release_date}
                img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            ))
          ) : (
            <h1>kino yo birodarlar</h1>
          )}
        </div>
      ) : (
        <h1 className="p-5 text-white fs-5">Loading. . .</h1>
      )}
    </div>
  );
};

export default SearchList;
