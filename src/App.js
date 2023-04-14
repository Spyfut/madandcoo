import './App.css';
import Contact from "./pages/Contact";
import MadandCoo from "./pages/MadandCoo";
import Mescreations from "./pages/Mescreations";
import Accueil from "./pages/Accueil";  
import {
  Route,
  Routes,
  HashRouter
} from "react-router-dom";
import React, { } from 'react';


function App() {

  return (

      <HashRouter>
        <div className='App'>
          <Routes>
            <Route path="/" element={<Accueil/>} />
            <Route path="/madandcoo" element={<MadandCoo />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/mes-creations" element={<Mescreations />} />
          </Routes>
        </div>
      </HashRouter>
    ) 

}

export default App;