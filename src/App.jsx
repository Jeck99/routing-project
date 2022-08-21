import { useState } from "react";
import "./App.css";
import Router from "./Router";

export const pages = ["home","about","contact"]
function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      {
        pages.map(pageName=>
        <button onClick={()=>setPage(pageName)}>{pageName}</button>
        )
      }
      <Router page={page}/>
    </div>
  );
}

export default App;
