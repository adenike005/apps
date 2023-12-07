import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
import ThemeSwitcher from './ThemeSwitcher';
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0%;
  width: 100%;
  height: var(--header-height); 
  background-color: black; 
  /* background: rgba( 255, 255, 255, 0.3 ); */
  border-top: 1px solid red;
  color: white;
  backdrop-filter: blur( 7.5px );
  /* box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.18 ); */
   

   .navigation{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 0;
   }

   h1{
    color: red;
   }


   nav ul li{
    display: inline-block;
    margin: 0 0.5rem;
    a{

        font-size: 1.6rem;
        font-weight: 500;
        display: inline-block;
        padding: 0.5rem 1rem;
        color: white;
        
    }
    &:hover{
      a{
        color: white;
      }
    }

   }
   .navMenu{
    display: flex;
    align-items: center;
    justify-content: flex-end;
   }

   .menuIcon{
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: 10px;
    padding: 3px;
    svg{
      color: red;
    }
   }

   .closeIcon{
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: 10px;
    padding: 3px;
    position: absolute;
    right: 10px;
    top: 10px;
    svg{
      color: white;
    }
   }


   @media only screen and (max-width: 768px) {
    nav{
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      width: 90%;
      max-width: 250px;
      top:0;
      right: 0;
      background-color: red;
      height: 100vh;
      z-index: 100;
      transform: translateX(100%);
      transition: 0.3s ease transform;
      overflow: hidden;
    }
    nav.open{
      transform: translateX(0);
    }
    nav ul li{
      display: block;
      text-align: right;
      width: 100%;
      margin: 0.5rem 0;
      a{
        display: block;
        width: 100%;
      }
    }
   }
`;

function Header() {
  const [isNavOpen, SetIsNavOpen] = useState(false);
  const [isMobile, setMobile] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );

  useEffect(() =>{
    window.addEventListener('resize', () =>{
      setMobile(
        window.matchMedia('(max-width: 768px)').matches
      )
    })
  }, []);
  // console.log(isMobile);
  return (
    <HeaderStyles>
      <div className="container">
        <div className="navigation">
          <ScrollLink to="home" smooth={true} duration={500}>
            <h1  >Adenike</h1>
          </ScrollLink>
          <div className="navMenu">
            <nav className={isMobile && isNavOpen ? "open": undefined}>
              {isMobile && (

              <div className="closeIcon" tabIndex='0'
               role='button' onClick={() => SetIsNavOpen(false)}
               onKeyDown={() => SetIsNavOpen(false)}>
                <FiX size={25}/></div>
              )}
              <ul>
                <li>
                  <ScrollLink to="home" smooth={true} duration={500}>
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="about" smooth={true} duration={500}>
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="project" smooth={true} duration={500}>
                    Project
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="contact" smooth={true} duration={500}>
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </nav>
            <ThemeSwitcher/>
            {isMobile && (
               <div className='menuIcon'
                tabIndex='0' role='button' onClick={() => SetIsNavOpen(true)}
                onKeyDown={() => SetIsNavOpen(true)}>

               <FiMenu size={25}/>
               </div>
            )}
           
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
