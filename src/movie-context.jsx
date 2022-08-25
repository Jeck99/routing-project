import { createContext, useState } from "react";

export const moviesContext = createContext();

const MoviesProvider = (props) => {
    const [movies,setMovies] = useState([])
  return (
    <moviesContext.Provider value={{ movies,setMovies}}>
        {props.children}
    </moviesContext.Provider>
  );
};
export default MoviesProvider;