import  Carousel from '../carousel/Carousel'
import React, { useEffect, useState } from 'react'

import Footer from '../footer/Footer'
import Card1 from '../card1/Card1'
import'./main.css';
import Navbar from '../Navbar/Navbar';
import Jumbotron from './jumbotron/Jumbotron';
import { useNavigate } from 'react-router-dom';


const Main = () => {
  const navigate=useNavigate();
  const user = JSON.parse(localStorage.getItem("userSession"));

    
   


  const[data,setdata]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/Event/getAll").then(res=>res.json()).then((result)=>{setdata(result)});
    
},[])

const myListShort = data.slice(0, 4);

  return (
    <div>
     <Navbar />
     <Jumbotron user={user}/><br/>
     <Carousel/>
     <div className='container shadow'>
     { myListShort?.length>0?(
            <div className='container'>
            {myListShort.map((event)=>(<Card1 event={event}/>))}
            

        </div>

        ) :(
            <div className='empty'>
            <h1> Aucun evenement</h1>
            

        </div>

        )}
 <br/>
 <br/>

<button type="button" class="btn btn-success " style={{margin:"10px"}}onClick={(e)=>{console.log(navigate("/service"));}}>Voir tout les evenements</button>
<br/>
</div>
<br/>
 <br/>
    
    
     <Footer/>
     
    </div>
  )
}

export default Main