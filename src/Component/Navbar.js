import React, { useState } from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { List, X} from "@phosphor-icons/react";



const NavbarSection = styled.div`
  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  border-bottom: .5px solid rgba(255,255,255,0.1);
  color: white;
  backdrop-filter: blur(10px);

  align-items: center;
  z-index: 1000;

  .navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 3rem;
    /* padding: 1.5rem 3rem; */

    .logo a{
      color: red;
      font-size: 2rem;
      font-weight: bolder;
    }
   
    .menu{
        display: flex;

        a{
          color: white;
          font-size: 1.5rem;
          
        }
        li{
          margin: 5px;
      }
        
       
    }

    .hamburger{
      display: none;
    }

    .icon{
      margin-right: 15px;
      cursor: pointer;
      
    }

    

   

    

    

    @media only screen and (max-width: 768px) {
      /* padding: 2rem 1.5rem;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%; */
      .menu{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        position: absolute;
        background-color: rgba(0,0,0,0.6);
        /* background-color: orange; */
        top: 0;
        left: -100%;
        z-index: -3;
      }

      .menu.active{
        left: 0;
      }

      .hamburger{
        display: block;
      }
    }
  }

  
`
function Navbar() {

  const [click , setClick] = useState(false);
  const handleClick = () => setClick(!click)
  return (
      <NavbarSection>
         <div className="navbar">

         <div className="logo">
            <span><Link>Adenike</Link></span>
           </div>

           <ul className={click ? "menu active" : "menu"}>
            <li><Link>Resume</Link></li>
            <li><Link>Work</Link></li>
            <li><Link>Contact</Link></li>
           </ul>
           <div className='hamburger' onClick={handleClick}>
            {click ? (<X size={18} />) :( <List size={18}/>)}
           </div>
           
          
           
         </div>
      </NavbarSection>
  )
}

export default Navbar