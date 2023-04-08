import React, { useEffect } from 'react'
import { useState } from 'react'
import"./LoginStyle.css"
import "./image-removebg-preview.png";

import { useNavigate } from 'react-router-dom';
const Login = () => {
    const[Username,setUsername]=useState("");
    const[passworda,setPassword]=useState("");
    const[data,setdata]=useState([]);
    const[res,setres]=useState("");
    const navigate=useNavigate();
    
const handleUsername=(e)=>{
    setUsername(e.target.value);
    console.log(Username);
    
   
    
    
}


const handlesubmit=(e)=>{
    e.preventDefault();
    fetch(`http://localhost:8080/utilisateur/${Username}`).then(res=>res.json()).then((result)=>setdata(result));

    if (data.length===0)
    {console.log("aucun ")}
    else
    {
       if( data.motdepasse===passworda)
       {console.log("ok");
       localStorage.setItem('userSession', JSON.stringify({
        isLoggedIn: true,
        userId: data.id,
        nomS:data.nom,
        prenomS:data.prenom,
        emailS:data.email,
        roleS:data.role,
        nomclubS:data.nomclub
      }));
        navigate("/dashboard")
    }
       else {console.log("password incorrecte");}
    }
    const user = localStorage.getItem("userSession");

    
    console.log("Contenu de user dans le local storage :", user);
    
}


  return (
    <div className='parent'>
        
    <div className='body'>
    <div className='login-card '>
        <h2>Login</h2>
        <h3>Enter your credentials</h3>
        <form className='login-form' onSubmit={handlesubmit}>
        
            <input type="text" placeholder='Email' onChange={handleUsername} value={Username} />
            <input type="password" placeholder='Password' value={passworda} onChange={(e)=>{setPassword(e.target.value)}}/>
            <a href='#'>Forget your password?</a>
            <button>Login</button>
            <button onClick={(e)=>{navigate("/inscription")}}>S'inscrire</button>
            <img className='fit-picture' src={require('./image-removebg-preview.png')} alt='logo'/>
            <h2>{res}</h2>


        </form>


    </div></div></div>
  )
}

export default Login