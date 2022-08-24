import "./Header.css";
import { Link } from "react-router-dom";
export const pages = ["about", "contact"];

function Header() {
  return (
    <div className="header">
      <Link to="/"><button>home</button></Link>
        {pages.map(pagePath => (
          <Link to={pagePath}><button>{pagePath}</button></Link>
        ))}
    </div>
  );
};

export default Header;
