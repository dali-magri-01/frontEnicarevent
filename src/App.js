
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './acceuille/page1/Main';
import Eventt from './acceuille/page2/Eventt';




import './App.css';
import Inscription from './Inscrire/Inscription';
import Login from './login/Login';
import Apropos from './acceuille/page3/Apropos';

function App() {
  return (
    
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Login />} />
   <Route path="inscription" element={<Inscription />} />
   <Route path="/dashboard" element={<Main/>}/>
   <Route  path="/service" element={<Eventt/>}/>
   <Route path="/apropos" element={<Apropos/>}/>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
