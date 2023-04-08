import React from 'react';
import './card1style.css';

const Card1 = ({event}) => {
  return (
    <div className="card">
      <img src={event.pathImage} alt className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{event.titre}</h5>
        <p className="card-text"> {event.description}</p>
        <h5>{event.date}</h5><br/>
        <h5 className="card-title">Nombre de place restant :{event.nbrPlace}</h5><br/>
        
      </div>
    </div>
  );
};

export default Card1;
