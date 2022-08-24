import { Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Router";

export const pages = ["home", "about", "contact"];
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {pages.map(pagePath => (
          <Link to={pagePath}>{pagePath}</Link>
        ))}
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
