
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './acceuille/page1/Main';
import Eventt from './acceuille/page2/Eventt';
import './App.css';
import Inscription from './Inscrire/Inscription';
import Login from './login/Login';
import Apropos from './acceuille/page3/Apropos';
import Parametre from './parametre/Parametre';
import Changepass from './parametre/changerpass/Changepass';
import Changecord from './parametre/changeNomPre/Changecord';
import PersistentDrawerLeft from './AdminEspace/Admines';
import Utilisateurad from './AdminEspace/Utilisateurad/Utilisateurad';

function App() {
  return (
    
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Login />} />
   <Route path="inscription" element={<Inscription />} />
   <Route path="/dashboard" element={<Main/>}/>
   <Route  path="/service" element={<Eventt/>}/>
   <Route path="/apropos" element={<Apropos/>}/>
   <Route path="/parametre" element={<Parametre/>}/>
   <Route path="/parametre/changemotdepasse" element={<Changepass/>}/>
   <Route path="/parametre/changenomprenom" element={<Changecord/>}/>
   <Route path="/admin" element={<PersistentDrawerLeft/>}/>
   <Route path="/utilisateur" element={<Utilisateurad/>}/>


   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
