import React from "react";
import ReactDOM from 'react-dom/client'
import Header from "../Component/Header";
import Home from '../Component/Home';
import About from "../Component/About";
import Blogs from '../Component/Blogs';
import Publications from '../Component/Publications';
import Asseors from '../Component/Asseors';
import ProfessionalAchivements from '../Component/ProfessionalAchivements'
import Contact from '../Component/Contact';
import Books from "../Component/Book";
import Judging from "../Component/Judging";
import Media from "../Component/Media";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <ProfessionalAchivements />
      <Judging/>
      <Publications />
      <Books/>
      <Blogs />
      <Asseors />
      <Media/>
      <Contact />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
