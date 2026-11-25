import React,{useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css'

export default function Navbar() {
  const location = useLocation();
  const[menuOpen, setMenuOpen] = useState(false)
  const[pagesDropdown, setPagesDropdown] =useState(false)

  
  const active = (path) =>  (location.pathname === path ? "active-link" : "");

  return (
    <header className="nav">
      <div className="nav-left">
        <div className="logo">
         <img src='/images/logo.webp' alt='' className='the-logs'/>
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link className="mobile-item" to="/" onClick={() => setMenuOpen(false)}>
          HOME <span className="arrow">⌄</span>
        </Link>

        <Link className="mobile-item" to="/About" onClick={() => setMenuOpen(false)}>
          ABOUT <span className="arrow">⌄</span>
        </Link>

        <Link className="mobile-item" to="/Schedule" onClick={() => setMenuOpen(false)}>
          SCHEDULE <span className="arrow">⌄</span>
        </Link>

        <Link className="mobile-item" to="/Classes" onClick={() => setMenuOpen(false)}>
          CLASSES <span className="arrow">⌄</span>
        </Link>

    <div className="mobile-item dropdown-toggle"  onClick={() => setPagesDropdown(!pagesDropdown)}>
       <span>PAGES </span>
          
           <span className="arrow">{pagesDropdown ? '^' : '⌄'}</span>

    </div>
          {pagesDropdown &&(
            <div className='mobile-submenu'>
              <Link to="/FAQ" onClick={() => setMenuOpen(false)}>FAQ</Link>
              <Link to= "/Prices" onClick={()=>setMenuOpen(false)}>PRICES</Link>

            </div>
          )}
        
    

        <Link className="mobile-item" to="/Contact" onClick={() => setMenuOpen(false)}>
          CONTACT <span className="arrow">⌄</span>
        </Link>

        <Link className="mobile-item join-mobile" to="/Join" onClick={() => setMenuOpen(false)}>
          JOIN NOW <span className="arrow">⌄</span>
        </Link>
      </div>
    

      

      <nav className="nav-center">
        <Link className={active("/")} to="/">HOME</Link>
        <Link className={active("/About")} to="/About">ABOUT</Link>
        <Link className={active("/Schedule")} to="/Schedule">SCHEDULE</Link>
        <Link className={active("/Classes")} to="/Classes">CLASSES</Link>


       <div className= {`dropdown ${pagesDropdown ? 'open': ''}`}
             onMouseEnter={() => setPagesDropdown(true)}
             onMouseLeave={() => setPagesDropdown(false)}
        
          >
          <span> 
            <span className={active("/Pages")} to="/Pages">PAGES⌄</span>
          </span>
          <div className='dropdown-menu'>
              <Link to= "/FAQ">FAQ</Link>
              <Link to= "/Prices">PRICES</Link>
           </div>
         
        </div>
       
        <Link className={active("/Contact")} to="/Contact">CONTACT</Link>
      </nav>

      <div className="nav-right">
        <Link to ="/Join">
        <button className="join-btn">JOIN NOW</button> 
        </Link>
        
      </div>

       <div 
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span><span></span><span></span>
      </div>



    </header>
  );
}










