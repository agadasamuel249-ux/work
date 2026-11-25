// import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {BrowserRouter as Router, Routes,Route,  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Schedule from './Pages/Schedule';
import Classes from './Pages/Classes';
import Pages from './Pages/Pages';
import Contact from './Pages/Contact';
import Join from './Pages/Join';
import FAQ from './Pages/FAQ';
import Prices from './Pages/Prices';


function App() {
  return (
   <Router>
    <div className='site'>
      <Navbar/>
      <main>
       <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path="/about" element={<About/>}/>
        <Route path ="/Schedule" element={<Schedule/>} />
        <Route path = "/Classes" element={<Classes/>}/>
        <Route path="/Pages" element={<Pages/>}/>
        <Route path="/Contact" element={<Contact/>}/>  
        <Route path='/Join' element={<Join />}/>
        <Route  path='/FAQ' element={<FAQ/>}/>
        <Route path='/Prices' element={<Prices/>}/>
        
      </Routes>

     </main>
     <Footer/>
  </div>
  </Router>

 
  
  )
}
export default App;