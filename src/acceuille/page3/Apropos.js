import React from 'react'
import Maps from './mapsGoogle/Maps'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import Cardpers from '../cardpersonne/Cardpers'

const Apropos = () => {


  const baha={
    "pathImage":"https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/257279175_2955872557876471_3713190013262811385_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UsNDeYysmG0AX-sxDN2&_nc_oc=AQmhZciaCUZrPyrJtZzYpoiYVoKn9tN04WTNxG5XiaYBYpRVPl6IK9YhPULIfWB-9sY&_nc_ht=scontent-pmo1-1.xx&oh=00_AfAaOUYrspao7HjFPDIzbKUIK3UOYr4b-Cs3pFkAmOJD6Q&oe=6449C489",
    "nom":"Baha boulabiare",
    "description":"Ingenieur informatique",
    
    
  }
  const dali={
    "pathImage":"https://scontent-pmo1-1.xx.fbcdn.net/v/t39.30808-6/315590627_5965799563444705_4560625849678844406_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AMWpIbxy-l8AX8gV1a_&_nc_ht=scontent-pmo1-1.xx&oh=00_AfAZfMuJ0CMPHCxLQ5kBzHMc-4GvrtUxt-lqr-RCb49r2w&oe=644B3FB9",
    "nom":"Mohamed ali magri",
    "description":"Ingenieur informatique",
    
    
  }

  return (
    <div>
        <Navbar/>
        <div >
            <div className='row'>
                <div className='col ms-4'>
                    <h3 className='ms-4' style={{color:"blue"}}>Contactez-nous</h3>
                    <br/>
                    <h4>Local principal</h4>
                    <span class="contact">NOUS CONTACTER</span>
            <p><i class="fa fa-map-marker" aria-hidden="true"></i> 45 Rue des Entrepreneurs 2035 Charguia II Tunis- Carthage-Tunisie</p>
            <p><i class="fa fa-mobile" aria-hidden="true"></i>( +216 ) 71 940 699 /  ( +216 ) 71 940 775</p>
            <p><i class="fa fa-fax" aria-hidden="true"></i>( +216 ) 71 941 579</p>
            <p><i class="fa fa-envelope" aria-hidden="true"></i><span class="cryptedmail" data-name="enicarthage" data-domain="enicarthage" data-tld="rnu.tn"></span></p>
            <p class="soustitle">Administration</p>
                <p>
                    <b>Directeur  </b> : Hassen Zairi<br/>
                    hassen.zairi@enicarthage.rnu.tn
                </p>
                <p>
                    <b>Secrétaire Général</b> : Amel Ben Alaya<br/>
                    amel.benalaya@enicar.u-carthage.tn
                </p>
				<p>
                    <b>  Directrice des études et des stages </b> : Imen Kammoun <br/>
                    imen.kammoun@enicar.ucar.tn
                </p>
				<p>
                    <b>Directeur du Département Génie Electrique</b> : Lotfi Bouslimi<br/>
                    Bouslimi.Lotfi@enicar.u-carthage.tn
                </p>
                <p>
                    <b>Directeur du Département Informatique</b> : Houssemeddine Hermassi <br/>
                    houssemeddine.hermassi@enicar.u-carthage.tn
                </p>
                <p>
                    <b>Directeur du Département Génie Industriel</b> : Slimane Attyaoui<br/>
                    slimen.attyaoui@enicar.u-carthage.tn
                </p>
                
                </div>
                <div className='col shadow'><Maps/></div>
            </div>
         
        </div>
        <div className='container'>
        <h3  style={{color:"blue",textDecoration:"underline"}}>Notre equipe</h3>
        </div>
        <div className='container'>
        <Cardpers personne={dali}/>
        <Cardpers personne={baha}/>
        </div>
        

        
        <Footer/>
    </div>
  )
}

export default Apropos