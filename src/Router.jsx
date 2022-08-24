import { Home, About, ContactUs } from "./components/pages";
import {Routes, Route} from 'react-router-dom'

  export default function Router() {
    return(
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<ContactUs/>}/>
      </Routes>
    )
  }