import { Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Router";
import Header from "./components/featurs/Header/Header";
import Footer from "./components/featurs/Footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
