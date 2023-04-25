import React, { useState } from 'react'
import Navbar from '../acceuille/Navbar/Navbar'
import Footer from '../acceuille/footer/Footer'
import './parametrestyle.css'

import { useNavigate } from 'react-router-dom'
const Parametre = () => {
  const navigate=useNavigate();
  const user = JSON.parse(localStorage.getItem("userSession"));
  
  return (
    <div>
        <Navbar/>
        <div className='container shadow box1 '>
        <h4 className='text-center'>Gestion du compte</h4>  
        
        <img src={require('./pngtree-login-password-or-authentication-png-image_5263246.png')} className='img9'/>
        <button type="button" class="btn btn-outline-danger btn2"onClick={(e)=>navigate("/parametre/changemotdepasse")}>Changer mot de passe</button> 
        <button type="button" class="btn btn-outline-danger btn2"onClick={(e)=>navigate("/parametre/changenomprenom")}>Changer nom ou prenom</button>
        </div>
        <br/>
        <Footer/>
    </div>
  )
}

export default Parametre