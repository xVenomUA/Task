import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectFilms } from "../../redux/Films/selector";
import { FilmContainer } from "../FilmContainer/FilmContainer";
import css from "./FilmList.module.css"
export const FilmList = () => {
  const dataFilms = useSelector(selectFilms);
  return (
    <ul className={css.list}>
      {dataFilms.map((film) => {
        return (
            <li key={film.id} className={css.li}>
          <Link  to={`/film/${film.id}`}>
            <FilmContainer key={film.id} dataFilms={film} />
          </Link>
          </li>
        );
      })}
    </ul>
  );
};
