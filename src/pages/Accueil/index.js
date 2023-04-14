import "./index.css"
import React, {} from 'react'
import Nav from "../../components/Nav";
import navItems from "../../components/Nav/index.json";

function Accueil() {

    return (
        <>
        <div className='App-Logo'><img alt="Mad&Coo Noir et Blanc" src={require('../../images/madandcoo-NB.png')}/></div>
        <Nav items={navItems.urls} modifiers='whiteNav'/>
        <div className='Insta-Logo'><a href="https://www.instagram.com/madandcoo/"><img alt="Insta" src={require('../../images/insta-NB.png')}/></a></div>
        <div className="Showcase"></div>
        <a href="https://fr.vecteezy.com/vecteur-libre/logo-instagram">Logo Instagram Vecteurs par Vecteezy</a>
        </>
        
    )
}

export default Accueil;