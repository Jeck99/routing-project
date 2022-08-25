import { Home, About, ContactUs, PageNotFound } from "./components/pages";
import { Routes, Route } from "react-router-dom";
import MoviesProvider from "./movie-context";


export default function Router() {
  return (
    <MoviesProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </MoviesProvider>
  );
}
