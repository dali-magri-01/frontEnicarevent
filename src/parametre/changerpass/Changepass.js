import React, { useState } from 'react'
import Navbar from '../../acceuille/Navbar/Navbar';
import Footer from '../../acceuille/footer/Footer';
import { useNavigate } from 'react-router-dom';

const Changepass = () => {
    
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate =useNavigate();
  const user = JSON.parse(localStorage.getItem("userSession"));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMessage("Les nouveaux mots de passe ne correspondent pas");
    } else {
      
      fetch(`http://localhost:8080/utilisateur/${user.emailS}/${newPassword}`,{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(newPassword)
    }).then(()=>{
        alert("mot de passse change");
        navigate("/parametre")
        
        
    })    }
  }
  return (
    <div>
      <Navbar/>

<div className="change-password-container">
      <form onSubmit={handleSubmit} className="change-password-form">
        <h2>Changer votre mot de passe</h2>
        <div className="form-group">
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">Nouveau mot de passe</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmer le nouveau mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="submit-button">
          Changer le mot de passe
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  )
}

export default Changepass