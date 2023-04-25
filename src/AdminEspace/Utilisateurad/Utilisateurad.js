import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardPer from './CardPer';
import SidebarA from '../SidebarA';


const Utilisateurad = () => {
    
    
    const[data1,setdata1]=useState([]);
    useEffect(()=>{
      fetch("http://localhost:8080/utilisateur/getall").then(res=>res.json()).then((result)=>{setdata1(result)});
      
  },[])




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


  { data1?.length>0?(
  <div >
  {data1.map((user)=>(<CardPer user={user}/>))}
  

</div>
  ):(
    <div className=''>
    <h1> Aucun evenement</h1>
    

</div>

)}
    

  </section>

    </div>

  )
}

export default Utilisateurad