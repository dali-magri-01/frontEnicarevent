import React from 'react';
import './card.css';


const Card = ({event}) => {
  return (
    <div className="card">
      <img src={event.pathImage} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{event.titre}</h5>
        <p className="card-text"> {event.description}</p>
        <h5>{event.date}</h5><br/>
        <h5>Nom club : {event.nomclub}</h5><br/>

        <h5 className="card-title">Nombre de place restant :{event.nbrPlace}</h5><br/>
        <a href="#" className="btn btn-primary"style={{position:"relative",left:"125px"}}>Reserver une place</a>
        {/* naamloha modal wela button doub yenzel 3leha el nombre decrementi w 1 wel button tetbloka w les information te3ou no5dhohom m session eli bech tkoun local strorage*/}
      </div>
    </div>
  );
};

export default Card;
