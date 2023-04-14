import React, { useState } from 'react'
import "./index.css"
import Nav from "../../components/Nav";
import navItems from "../../components/Nav/index.json";
import emailjs from '@emailjs/browser';

function Contact(props) {


    const [inputValues, setInputValues] = useState({
        nom: '', email: '', demande: ''
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    


    const handleSubmit = event => {
        event.preventDefault();
        const templateId = "template_npcax7f";
        const serviceId = "service_hfiwbxa";
        sendFeedback(serviceId, templateId, {
            nom: inputValues.nom,
            email: inputValues.email,
            demande: inputValues.demande
        })
        //console.log(inputValues);
        //document.location = "mailto:"+inputValues.email+"?subject="+inputValues.nom+"&body="+inputValues.demande;
        /*emailjs : willytab@outlook.fr
        mdp : EmailJS94350!
        */
       alert('Votre message a bien été envoyé');
    }

    const sendFeedback = (serviceId, templateId, variables) => {
        emailjs.
        send(serviceId, templateId, variables, 'yJTPbupAJVvA0nJfp')
        .then((res) => {
            console.log('Success');
        })
        .catch((err) => 
            console.error('Il y a une erreur.')
        );
    };

    return (
        <>
        
            <div className='App-Logo'><img alt='Mad&Coo Logo' src={require('../../images/madandcoo.png')}/></div>
            <Nav items={navItems.urls} />
            <div className='Insta-Logo'><a href="https://www.instagram.com/madandcoo/"><img alt="Insta" src={require('../../images/insta.png')}/></a></div>
            <div className="Contact-Core">
                <div className="Contact ContactImg"><img alt="Patisseries" src={require('../../images/gateaux2.jpg')} /></div>
                <div className="Contact Contact-Form">
                    <p className="Contact-Title">Me contacter</p>
                    <form method="post" id="contactForm">
                        <label htmlFor="nom">
                            <span>Nom : </span>
                            <input type="text" name="nom" id="nom" onChange={handleChange} />
                        </label>
                        <br />
                        <label htmlFor="email">
                            <br />
                            <span>Votre adresse email : </span>
                            <input type="text" name="email" id="email" onChange={handleChange} />
                        </label>
                        <br />
                        <label htmlFor="demande">
                            <br />
                            <span>Votre demande : </span>
                            <textarea rows="8" cols="50" name="demande" id="demande" onChange={handleChange} />
                        </label>
                        <br />
                        <input className="Button" type="submit" id="submit" onClick={handleSubmit} value="Envoyer" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact