import React from 'react';
import './card1style.css';

const Card1 = ({event}) => {
  return (
    <div className="card1">
      {event.pathImage===""?
      <img src={require('../carousel/Logo_ENICarthage.jpg')} alt className="card-img-top" />
      :
      <img src={`http://localhost:8080/Event/image/${event?.id}`} alt className="card-img-top" />}
      <div className="card-body">
        <h5 className="card-title ms-2">{event.titre}</h5>
        <p className="card-text ms-3 "> {event.description}</p>
        <h5 className='ms-3'> Date : {event.date}</h5><br/>
         
        
      </div>
    </div>
  );
};

export default Card1;
