import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import"./IncsriptionStyle.css";

const Inscription = () => {
    const[nom,setnom]=useState('');
    const[prenom,setprenom]=useState('');
    const[email,setemail]=useState('');
    const[classe,setclasse]=useState('INFOA');
    const[motdepasse,setmotdepasse]=useState('');
    const[role,setrole]=useState('etudiant');
    const navigate=useNavigate();

    const [nomClub,setnomClub]=useState("");
    

    

    const HandleSubmit =(e)=>{
        e.preventDefault();
        const utilisateur={nom,prenom,email,classe,role,motdepasse,nomClub};
        console.log(utilisateur);
        fetch("http://localhost:8080/utilisateur/add",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(utilisateur)
        }).then(()=>{
            console.log("utilisateur ajoute");
            navigate("/");
        })
    }

  return (
    <div className='parent1'>
    <div className='body1'>
    <div className='login-card1'>
    
        <h2>Inscription</h2>
        <h3>Entrer vos coordonner </h3>
        <form className='login-form1' onSubmit={HandleSubmit}>
            <input type="text" placeholder='Nom' value={nom}
            onChange={(e)=>{setnom(e.target.value)}} required/>


            <input type="text" placeholder='Prenom' value={prenom}
            onChange={(e)=>{setprenom(e.target.value)}} required/>
            <input type="text" placeholder='Email' value={email}
            onChange={(e)=>{setemail(e.target.value)}} required/>
            <select value={classe} onChange={(e)=>{setclasse(e.target.value)}}>
            <option>INFOA</option>
            <option>INFOB</option>
            <option>INFOC</option>
            <option >INFOD</option>
            </select>
            <select value={role} onChange={(e)=>{setrole(e.target.value)}} >
            <option>Etudiant</option>
            <option>Representant du club</option>
            </select>
            { role==="Representant du club"&&
            <input type='text' value={nomClub} placeholder='Nom du club' onChange={(e)=>{setnomClub(e.target.value)}}/>}
            
            <input type="password" placeholder='Mot de passe' value={motdepasse}
            onChange={(e)=>{setmotdepasse(e.target.value)}} required/>
            <input type="password" placeholder='confirmer mot de passe' />
            
           
            <button>S'inscrire</button>
            <button type="button" class="btn btn-outline-info"onClick={(e)=>{navigate("/");}}>Back to login</button>
            <img className='fit-picture'src={require('./image-removebg-preview.png')} alt='logo'/>


        </form>


    </div></div></div>)
}

export default Inscription