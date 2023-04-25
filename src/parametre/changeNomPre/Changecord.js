import React, { useState } from 'react'
import Navbar from '../../acceuille/Navbar/Navbar';
import Footer from '../../acceuille/footer/Footer';

const Changecord = () => {
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSave = () => {
    // Enregistrer le nom et prénom
    console.log(`Nom : ${lastName}, Prénom : ${firstName}`);
  }
  return (
    <div>
      <Navbar/>
    <div className='container shadow 'style={{backgroundColor:"#f5f5f5"}}>
        <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h2 style={{ 
        marginBottom: '20px'
      }}>Changer le nom et prénom</h2>
      <div style={{ 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <input 
          type="text" 
          placeholder="Nom" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          style={{ 
            marginRight: '10px',
            padding: '5px',
            borderRadius: '5px',
            border: 'none',
            boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)'
          }} 
        />
        <input 
          type="text" 
          placeholder="Prénom" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          style={{ 
            marginRight: '10px',
            padding: '5px',
            borderRadius: '5px',
            border: 'none',
            boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)'
          }} 
        />
        <button 
          onClick={handleSave} 
          style={{ 
            padding: '5px 10px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#0e8cef',
            color: '#fff',
            boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer'
          }}
        >
          Enregistrer
        </button>
      </div>
    </div>
    </div><br/>
    <Footer/></div>
  )
}

export default Changecord