
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';
import themeList from '../data/themeList';
import ThemeSwitcher from './ThemeSwitcher';

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  /* background-color: ${({ scrollColor }) => (scrollColor ? 'var(--darkBlue_4)' : 'var(--lightBlue_1)')}; */
  border-top: 1px solid red;
  border-bottom: .5px solid rgba(255,255,255,0.1);
  color: white;
  backdrop-filter: blur(10px);
  font-family: 'Whisper', cursive;
  align-items: center;
  z-index: 1000;

  // ... Other styles

  
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
        /* color: white; */
        color: ${({ theme: { theme } }) =>
        theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
         font-family: 'Whisper', cursive;
         /* font-family: 'EB Garamond', sans-serif; */
         align-items: center;

        
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
      /* color: red; */
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
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
      z-index: 1000;
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
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setMobile] = useState(window.matchMedia('(max-width: 768px)').matches);
  const [scrollColor, setScrollColor] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setMobile(window.matchMedia('(max-width: 768px)').matches);
    });

    const handleScroll = () => {
      const scrollThreshold = 50;
      setScrollColor(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderStyles scrollColor={scrollColor}>
      <div className="container">
        <div className="navigation">
          <Link to="home" smooth={true} duration={500}>
            <h1>Adenike</h1>
          </Link>
          <div className="navMenu">
            <nav className={isMobile && isNavOpen ? 'open' : undefined}>
              {isMobile && (
                <div
                  className="closeIcon"
                  tabIndex="0"
                  role="button"
                  onClick={() => setIsNavOpen(false)}
                  onKeyDown={() => setIsNavOpen(false)}
                >
                  <FiX size={25} />
                </div>
              )}
              <ul>
                <li>
                  <Link to="hero" smooth activeClass="active" >
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="scroll" smooth activeClass="active" spy>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="skill" smooth activeClass="active" spy>
                    Skill
                  </Link>
                </li>
                <li>
                  <Link to="project" smooth activeClass="active" spy>
                    Project
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth activeClass="active" spy>
                    Contact
                  </Link>
                </li>
                {/* ... Other navigation items ... */}
              </ul>
            </nav>
            <ThemeSwitcher />
            {isMobile && (
              <div
                className="menuIcon"
                tabIndex="0"
                role="button"
                onClick={() => setIsNavOpen(true)}
                onKeyDown={() => setIsNavOpen(true)}
              >
                <FiMenu size={25} />
              </div>
            )}
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;

