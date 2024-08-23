import { NavLink } from "react-router-dom";
import "./movie.scss";

function MovieCards({ img, title, id, date, relaseDate }) {
  return (
    <NavLink to={`/movie/${id}`}>
      <div className="card">
        <img
          style={{ width: "280px", borderRadius: "20px 20px 0 0" }}
          src={img}
          alt="rasm"
        />
        <h5>{title}</h5>
        <p>{date}</p>
      </div>
    </NavLink>
  );
}

export default MovieCards;
