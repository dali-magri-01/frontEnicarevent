import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../Navbar/Navbar'
import Card from '../card/Card';

import  Modal  from './modal/Modal';


const Eventt = () => {
  const[data,setdata]=useState([]);
  const user = JSON.parse(localStorage.getItem("userSession"));

  useEffect(()=>{
    fetch("http://localhost:8080/Event/getAll").then(res=>res.json()).then((result)=>{setdata(result)});
    
},[])




  
  return (
    <div>
      <Navbar/> 
      <img src={require('./club.jpg')} style={{width:"100%",marginLeft:"-43px",opacity:"0.85"}} alt="..."/>
      
      <div>
      {user.roleS==="Representant du club"&&<Modal/>}
      </div>
      { data?.length>0?(
            <div className='container shadow'>
            {data.map((event)=>(<Card event={event}/>))}
            

        </div>

        ) :(
            <div className='container shadow'>
            <h1> Aucun evenement</h1>
            

        </div>

        )}

          <br/>
          <br/>
      <Footer/>
      
    </div>
  )
}

export default Eventt