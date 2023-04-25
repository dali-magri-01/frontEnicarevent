import React from 'react'
import'../styleA.css'
const CardPer = ({user}) => {



    function Suprm(id)
    {
        fetch(`http://localhost:8080/utilisateur/delete/${id}`, {
            method: "DELETE"
          })
            .then(response => {
              if (response.ok) {
                console.log("User deleted successfully");
                window.location.reload();
                
              } else {
                console.log("Failed to delete user");
                // Handle errors here
              }
            })
            .catch(error => {
              console.log("Error deleting user: ", error);
              // Handle errors here
            });
    }
  return (
    <div>
          <div class="home-content">
    <div class="overview-boxes">
      <div class="box">
        <div class="right-side">
          <div class="box-topic">{user.nom +" "+user.prenom}</div>
          <br/>
          <div class="box-topic">Classe: {user.classe}</div>
          
          <div class="box-topic">{user.role+" "+user.nomclub}</div>
          
          <div class="indicator">
            <i class='bx bx-up-arrow-alt'></i>
            <br/><br/>
            <span class="text">{user.email}</span>
          </div>
        </div>
        <button type="button" class="btn btn-danger ms-4" onClick={(e)=>Suprm(user.id)} >supprimer</button>
      </div>
      
      </div></div>
    </div>
  )
}

export default CardPer