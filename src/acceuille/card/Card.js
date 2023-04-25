import React, { useEffect, useState } from 'react';
import './card.css';
import ModalSpect from '../modalSpectateurs/ModalSpect';




const Card = ({event}) => {
  
  const [isDisabled, setIsDisabled] = useState(false);
  const[data,setdata]=useState([]);
  const user = JSON.parse(localStorage.getItem("userSession"));

    useEffect(()=>{
      fetch(`http://localhost:8080/spectateurs/idevenement/${event.id}`).then(res=>res.json()).then((result)=>{setdata(result)});
       
  },[])

useEffect(()=>{
  if(parseInt(event.nbrPlace)-data.length===0){setIsDisabled(true);setScursor("not-allowed")}
},[])

const [Scursor,setScursor]=useState("grab")

  const HandleSubmit =(e)=>{
    e.preventDefault();
    console.log (data);
    const idevenement=event.id;
    const idUtlisateur=user.userId;
    const nomSpectateur= user.nomS;
    const prenomSpectateur=user.prenomS;
    const emailSpectateur=user.emailS
    const Spectateur={idUtlisateur,nomSpectateur,prenomSpectateur,emailSpectateur,idevenement};
    console.log(Spectateur);
    fetch("http://localhost:8080/spectateurs/add",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(Spectateur)
    }).then(()=>{
        alert("Spectateur ajouter");
        setIsDisabled(true);
        event.nbrPlace--;
        setScursor("not-allowed");
    })
}
  
// event.id
    return (
    <div className="card">
      
      {event.pathImage===""?
      <img src={require('../carousel/Logo_ENICarthage.jpg')} alt className="card-img-top" />
      :
      <img src={`http://localhost:8080/Event/image/${event?.id}`} alt className="card-img-top" />}
      <div className="card-body">
        <h5 className="card-title">{event.titre}</h5>
        <p className="card-text"> {event.description} </p>
        <h5> Date : {event.date}</h5><br/>
        <h5>Nom club : {event.nomClub}</h5><br/>

        <p className="card-title" style={{color:"blue"}}>Nombre de place restant :{parseInt(event.nbrPlace)-data.length}</p><br/>
        

        { user.nomclubS===event.nomClub?<ModalSpect event={event}/>
        :<button href="#" className="btn btn-primary" disabled={isDisabled} style={{position:"relative",left:"125px",cursor: Scursor}}
        onClick={HandleSubmit}>Reserver une place</button>}
      
      
      </div>
    </div>
  );
};

export default Card;
