import "./Title.css";
import { useContext } from "react";
import { moviesContext } from "../../../movie-context";

function Title() {
  const contextFromMovies = useContext(moviesContext);
  return (
    <div className="title">
      <h1>Title</h1>
    </div>
  );
}

export default Title;
