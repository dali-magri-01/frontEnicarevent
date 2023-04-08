import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  
  const [isLoggIn, setIsLoggIn] = useState(false);

const handleLogout=(e)=>{
  localStorage.removeItem('userSession');
  setIsLoggIn(false);
  navigate("/");
  
  }


useEffect(()=>{
  const user = JSON.parse(localStorage.getItem("userSession"));
  if (user && user.isLoggedIn) {
    setIsLoggIn(true);}
   

},[]);





return (
    <div>
         <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <a href class="navbar-brand">
      <img src={require('./logoEnicarEvent.png')} alt="Avatar Logo" style={{width:"150px",marginRight:"50px",marginBottom:"-2px"}} class="rounded-pill"/> 
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={(e)=>{navigate('/dashboard')}} style={{color:"white"}}>Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#" onClick={(e)=>{navigate('/service')}} style={{color:"white"}}>Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" onClick={(e)=>{navigate('/apropos')}} style={{color:"white"}}>A propos</a>
        </li>
       
      </ul>
      <form class="d-flex">
        
        <button class="btn btn-danger" type="button" onClick={handleLogout}>Déconnexion</button>
      </form>
      {/* <form class="d-flex">
        <button type="button" class="btn btn-danger "style={{marginLeft:"700px"}}></button>
      </form> */}
    
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar