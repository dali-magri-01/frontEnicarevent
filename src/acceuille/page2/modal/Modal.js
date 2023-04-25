import React, { useState } from 'react';
import './Modal.css';



const Modal = () => {
  // const [nomClub,setnomClub]=useState('');


  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);  
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
    const nomClub=user.nomclubS;
    const event={titre,description,nbrPlace,date,pathImage,nomClub};
    console.log(event);
    const formData  = new FormData();
    formData.append("titre",titre);
    formData.append("description",description);
    formData.append("nbrPlace",nbrPlace);
    formData.append("date",date);
    formData.append("nomClub",nomClub);
    formData.append("image",pathImage);
    fetch("http://localhost:8080/Event/add/multipart",{
        method:"POST",
        headers:{ 'Accept': 'application/json, application/xml, text/plain, text/html'
        },
        body: formData
    }).then(
      ()=>{
        setIsOpen(false)
        window.location.reload()
      }
    )
   
}


  return (
    <div>
      <button className='btn1' onClick={handleOpenModal}style={{marginTop:"20px",marginLeft:"20px"}}>Ajouter un evenement</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modalz">
            <button className="modal-close " onClick={handleCloseModal}>X</button>
            <h2>Ajouter un evenement</h2>
            <br/>
            <form onSubmit={HandleSubmit}>
            <input type="text" class="form-control" value={titre} placeholder="Tite de l evenement" onChange={handleTite}/><br/>
            <input type="text" class="form-control" value={description} placeholder="description de l'evenement"onChange={handledescription} /><br/>
            <input type="number" class="form-control" value={nbrPlace} placeholder="nombre de place limiter de l evenement" onChange={handlenombre}/><br/>
            <input type="date" class="form-control" value={date} placeholder="date de l'evenement" onChange={handledate}/><br/>
            <input className='btn' type="file" onChange={handleImageChange} />
            <div className='text-center'>
            {image && <img className='me-5' src={image} alt="Uploaded Imaged" style={{width:"400px",height:"200px"}}/>}
            <br/><br/> <button class="btn btn-danger " type="submit" >Envoyer</button></div> 
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;