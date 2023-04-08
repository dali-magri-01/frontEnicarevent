import React from 'react'

const Cardpers = ({personne}) => {
  return (
    <div>
    <div class="card" style={{width:"300px"}}>
    <img class="card-img-top"  src={personne.pathImage} alt="Cardimage"/>
    <div class="card-body">
      <h4 class="card-title">{personne.nom}</h4>
      <p class="card-text">{personne.description}</p>
      
    </div>
  </div></div>
  )
}

export default Cardpers