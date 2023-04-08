import React from 'react'
import './styles.css';
import { useNavigate } from 'react-router-dom';
const Jumbotron = ({user}) => {
  const navigate =useNavigate();
  return (
    
    
 <div class="container">
  <div class="row">
    <div class="col">
    
        <h1>Bienvenue {user.prenomS} </h1><br/><br/><br/>
        <p style={{fontFamily:" cursive"}}>Ce site web  offre une plateforme intuitive et conviviale qui permettra aux utilisateurs de s'informer sur les évènements à venir, de s'inscrire et de réserver leur place si nécessaire. Il devra également permettre aux organisateurs d'évènements de publier des informations relatives à leur événement, de gérer les inscriptions et de communiquer avec les participants.
</p>
        <br/>
        <button type="button" class="btn btn-primary" onClick={(e)=>navigate("/apropos")}>Voir plus</button>
    </div>
    <div class="col">
    <img  src={require('../image-removebg-preview.png')} alt='logo'/>

    </div>
  
    </div></div>

  )
}

export default Jumbotron