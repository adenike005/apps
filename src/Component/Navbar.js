import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi';

const NavbarSection = styled.div`
/* padding-top: calc(var(--header-height) ); */
 .contain{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem 3rem;
    /* border-top: 1px solid red; */
    border-bottom: .5px solid rgba(255,255,255,0.1);
    color: white;
    backdrop-filter: blur(10px);

    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo span{
            color: red;
            font-size: 2rem;
            font-weight: bolder;
            cursor: pointer;
        }

        .menu{
          display: flex;

          li a{
            margin: 5px;
            color: var(--white);
            font-size: 1.4rem;
          }
        }

        .hamburg{
            /* display: flex; */
            display: block;
            cursor: pointer;
        }

    }
   
 }

 @media only screen and (max-width: 768px) {
   .menu{
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    z-index: -2;
    top: 0;
    position: absolute;
    left: 0;

    li a{
        color: yellow;
    }
   }
   .hamburger{
    display: initial;
   }
   
}
`

function Navbar() {
    // const [scrollColor, setScrollColor] = useState(false);
    const [click , setClick] = useState(false);
    const handleClick = () => setClick(!click)


  return (
    <NavbarSection>
        <div className="contain">
           <div className="navbar">
           <div className="logo">
                <span>Adenike</span>
            </div>
            <ul className="menu">
              <li><Link>Work</Link></li>
              <li><Link>Resume</Link></li>
              <li><Link>Contact</Link></li>
            </ul>

            <div className="hamburg" onClick={handleClick}>
               {click ? (<FiX />) : (<FiMenu/>)}
            </div>
           </div>
        </div>
    </NavbarSection>
  )
}

export default Navbar