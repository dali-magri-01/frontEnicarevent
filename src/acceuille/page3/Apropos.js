import React from 'react'
import Maps from './mapsGoogle/Maps'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import Cardpers from '../cardpersonne/Cardpers'

const Apropos = () => {


  const baha={
    "pathImage":"https://scontent.ftun18-1.fna.fbcdn.net/v/t39.30808-6/257279175_2955872557876471_3713190013262811385_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ze2c1s93SpgAX-VE-_S&_nc_oc=AQnAQBUDMcxO-9Bpexc5jCG_9fSKSB-lushqQaDWhDveLhKIsN4w2AHrd1WtlLy4PPg&_nc_ht=scontent.ftun18-1.fna&oh=00_AfAPZf4qGWwJM4kVTRjasw_vyCBosFSTLknX0WeBv1oNEg&oe=64320989",
    "nom":"Baha boulabiare",
    "description":"Ingenieur informatique",
    
    
  }
  const dali={
    "pathImage":"https://scontent.ftun18-1.fna.fbcdn.net/v/t39.30808-6/315590627_5965799563444705_4560625849678844406_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CjDpQhXQEzoAX9eHC_b&_nc_ht=scontent.ftun18-1.fna&oh=00_AfAGky_T2r8NfTdcimJUAJyQNkqchwAwugfgQAvuWLuzKA&oe=643384B9",
    "nom":"Mohamed ali magri",
    "description":"Ingenieur informatique",
    
    
  }

  return (
    <div>
        <Navbar/>
        <div >
            <div className='row'>
                <div className='col'>
                    <h3 className='ms-4' style={{color:"blue"}}>Contactez-nous</h3>
                    <br/>
                    <h4>Local principal</h4>
                
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