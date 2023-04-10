import React, { useEffect, useState } from 'react'
import './modalSpectstyle.css'
const ModalSpect = ({event}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenModal = () => {
      setIsOpen(true);
      console.log(data);
      console.log(event.id);
    };
    const handleCloseModal = () => {
      setIsOpen(false);
    };


    const[data,setdata]=useState([]);

    useEffect(()=>{
      fetch(`http://localhost:8080/spectateurs/idevenement/${event.id}`).then(res=>res.json()).then((result)=>{setdata(result)});
      
  },[])
  return (
    <div>
    <button className='btn12' onClick={handleOpenModal}>Voir les spectateurs</button>
    {isOpen && (
      <div className="modal-overlay1">
        <div className="modalz1">
          <button className="modal-close " onClick={handleCloseModal}>X</button>
          { data?.length>0?(
            <div className='container'>
            <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.nomSpectateur}</td>
            <td>{item.prenomSpectateur}</td>
            <td>{item.emailSpectateur}</td>
          </tr>
        ))}
      </tbody>
    </table>
            

        </div>

        ) :(
            <div className='empty'>
            <h1> Aucun spectateurs</h1>
            

        </div>

        )}
         
          
          

        </div>
      </div>
    )}
  </div>
  )
}

export default ModalSpect