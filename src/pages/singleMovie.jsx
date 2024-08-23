import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const SingleMovie = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [film, setFilm] = useState({
    isFetched: false,
    data: {},
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      })
      .then((res) =>
        setFilm({
          isFetched: true,
          data: res.data,
          err: false,
        })
      )
      .catch((error) =>
        setFilm({
          isFetched: true,
          data: [],
          err: error,
        })
      );
  }, []);

  console.log(film);
  return (
    <div>
      {film.isFetched ? (
        <div className="box">
          <img
            style={{ width: "400px", borderRadius: "15px", height: "600px" }}
            src={`https://image.tmdb.org/t/p/w500/${film.data.poster_path}`}
            alt="rasm"
          />
          <div className="box__block">
            <div className="box__block__top">
              <h2 className="box-title">{film.data.title}</h2>
              <span className="box-span">{film.data.release_date}</span>
              <div className="box1">
                <h3> Overview</h3>
                <p>{film.data.overview}</p>
                <button
                  onClick={() => {
                    navigate("/movies");
                  }}
                  type="button"
                  className="singleButton"
                >
                  Go Back
                </button>
              </div>
            </div>
            <div className="box__block__bottom"></div>
          </div>
        </div>
      ) : (
        "Loading  . . ."
      )}
    </div>
  );
};

export default SingleMovie;
