import React from 'react'
import './styleA.css';
import { useNavigate } from 'react-router-dom';

const SidebarA = () => {
    const navigate=useNavigate();
  return (
    <div>
        <div class="sidebar">
    <div class="logo-details">
      <i class='bx bxl-c-plus-plus'></i>
     <img src={require("../acceuille/page1/image-removebg-preview.png")} style={{width:"90%",marginLeft:"-90px  ",marginTop:"10px"}}/> 
    </div>
      <ul class="nav-links">
        <li>
          <a href="#" class="active" onClick={(e)=>navigate("/admin")}>
            <i class='bx bx-grid-alt' ></i>
            <span class="links_name">Dashboard</span>
          </a>
        </li>
        <li>
        <a href="#" class="active" onClick={(e)=>navigate("/utilisateur")}>
            <i class='bx bx-grid-alt' ></i>
            <span class="links_name">Users</span>
          </a>
          
        </li>
       
        
        <li class="log_out">
          <a href="#" onClick={(e)=>navigate("/")}>
            <i class='bx bx-log-out'></i>
            <span class="links_name">Log out</span>
          </a>
        </li>
      </ul>
  </div>
    </div>
  )
}

export default SidebarA