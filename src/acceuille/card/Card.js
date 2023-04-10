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
//   useEffect(()=>{
//     console.log (data);
//     const personExists = data.find((p) => p.idUtilisateur === user.userId);
    

     
// },[])




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
    })
}
  
// event.id
    return (
    <div className="card">
      <img src={event.pathImage} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{event.titre}</h5>
        <p className="card-text"> {event.description}</p>
        <h5>{event.date}</h5><br/>
        <h5>Nom club : {event.nomclub}</h5><br/>

        <h5 className="card-title">Nombre de place restant :{event.nbrPlace}</h5><br/>
        
        { user.nomclubS===event.nomclub?<ModalSpect event={event}/>
        :<button href="#" className="btn btn-primary" disabled={isDisabled} style={{position:"relative",left:"125px"}}onClick={HandleSubmit}>Reserver une place</button>}
      
      
      </div>
    </div>
  );
};

export default Card;
