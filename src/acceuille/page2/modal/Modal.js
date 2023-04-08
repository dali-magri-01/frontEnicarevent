import React, { useState } from 'react';
import './Modal.css';



const Modal = () => {
  const [nomclub,setnomclub]=useState('');


  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
    setnomclub(user.nomclubS);
    console.log(nomclub);
    
    
    
   
    
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };


  const [image, setImage] = useState(null);
  const [pathImage,setpathImage]=useState('');

  const handleImageChange = (event) => {
    setpathImage(event.target.files[0]);
    console.log(pathImage);
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      
      
    };
    reader.readAsDataURL(file);
  };






  const[titre,settitre]=useState("");
  const[description,setdescription]=useState("");
  const[nbrPlace,setnombre]=useState(0);
  const [date,setdataEvent]=useState("");

  const handleTite=(e)=>{
    settitre(e.target.value);
  }
  const handledescription=(e)=>{
    setdescription(e.target.value);
  }
  const handlenombre=(e)=>{
    setnombre(e.target.value);
  }
  const handledate=(e)=>{
    setdataEvent(e.target.value);
  }
  const user = JSON.parse(localStorage.getItem("userSession"));
  
  const HandleSubmit =(e)=>{
    e.preventDefault();
    
    const event={titre,description,nbrPlace,date,pathImage,nomclub};
    console.log(event);
    fetch("http://localhost:8080/Event/add",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(event)
    }).then(()=>{
        console.log("Event ajouter");
        setIsOpen(false);
       
    })
}


  return (
    <div>
      <button className='btn1' onClick={handleOpenModal}>Ajouter un evenement</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modalz">
            <button className="modal-close " onClick={handleCloseModal}>X</button>
            <h2>Ajouter un evenement</h2>
            <form onSubmit={HandleSubmit}>
            <input type="text" class="form-control" value={titre} placeholder="Tite de l evenement" onChange={handleTite}/><br/>
            <input type="text" class="form-control" value={description} placeholder="description de l'evenement"onChange={handledescription} /><br/>
            <input type="number" class="form-control" value={nbrPlace} placeholder="nombre de place limiter de l evenement" onChange={handlenombre}/><br/>
            <input type="date" class="form-control" value={date} placeholder="date de l'evenement" onChange={handledate}/><br/>
            <input className='btn' type="file" onChange={handleImageChange} />
            {image && <img src={image} alt="Uploaded Imaged" style={{width:"400px",height:"200px"}}/>}
            <br/><br/>  <button class="btn btn-danger" type="submit" >Envoyer</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;