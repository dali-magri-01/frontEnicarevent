import React, { useEffect, useState } from 'react'
import './styleA.css'
import { useNavigate } from 'react-router-dom';
import SidebarA from './SidebarA';
const Admines = () => {

 

  const[data,setdata]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:8080/Event/getAll").then(res=>res.json()).then((result)=>{setdata(result)});
    
},[])
const[id,setid]=useState();

function handleClick(id){
  fetch(`http://localhost:8080/Event/${id}`, {
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

<SidebarA/>
  <section class="home-section">
    <nav>
      <div class="sidebar-button">
        <i class='bx bx-menu sidebarBtn'></i>
        <span class="dashboard" >Dashboard</span>
      </div>
     
    </nav>

    <div class="home-content">
      

      <div class="sales-boxes">
        <div class="recent-sales box">
        { data?.length>0?(
            <div className='container'>
            <table>
      <thead>
        <tr>
          <th>Titre</th>
          <th>Description</th>
          <th>Date</th>
          <th>Nombre de places</th>
          <th>Nom du club</th>
          <th>Gerer</th>
          

        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.titre}</td>
            <td>{item.description}</td>
            <td>{item.date}</td>
            <td>{item.nbrPlace}</td>
            <td>{item.nomClub}</td>
            <td>
            
            <button type="button" class="btn btn-danger" onClick={()=>handleClick(item.id)}>supprimer</button>
              </td>
            
          </tr>
        ))}
      </tbody>
    </table>
            

        </div>

        ) :(
            <div className='empty'>
            <h1> Aucun evenement</h1>
            

        </div>

        )}
        </div>
        
      </div>
    </div>
  </section>
    </div>
  )
}

export default Admines