// import React, { useState , useEffect} from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { List, X } from '@phosphor-icons/react';

// const NavbarSection = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: var(--header-height);
//   border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);
//   color: white;
//   backdrop-filter: blur(10px);
//   align-items: center;
//   z-index: 1000; /* Set z-index to a value greater than 0 */
//   transition: background-color 0.3s ease; 
  

//   .navbar {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 1.5rem 0rem;

//     .logo a {
//       color: red;
//       font-size: 2rem;
//       font-weight: bolder;
//     }

//     .menu {
//       display: flex;

//       a {
//         color: white;
//         font-size: 1.5rem;
//         margin: 0 15px; /* Adjust margin */
//       }
//     }

//     .hamburger {
//       display: none;
//     }

//     .icon {
//       margin-right: 15px;
//       cursor: pointer;
//     }

//     @media only screen and (max-width: 768px) {
//       .menu {
//         flex-direction: column;
//         gap: 10px;
//         justify-content: center;
//         align-items: center;
//         width: 100%;
//         height: 100vh;
//         position: absolute;
//         background-color: rgba(0, 0, 0, 0.9);
//         top: 0;
//         left: -100%;
//         z-index: -3;
//         font-size: 2.5rem;
//       }

//       .menu.active {
//         left: 0;
//       }

//       .hamburger {
//         display: block;
//       }
//     }
//   }
// `;

// function Navbar() {
//   const [click, setClick] = useState(false);
//   // const handleClick = () => setClick(!click);

 

//   const handleClick = () => setClick(!click);

 

//   return (
//     <NavbarSection  >
//      <div className="container">
//      <div className="navbar">
//         <div className="logo">
//           <span>
//             <Link to="/">Adenike</Link>
//           </span>
//         </div>
//         <ul className={click ? 'menu active' : 'menu'}>
//           <li>
//             <Link >Resume</Link>
//           </li>
//           <li>
//             <Link>Work</Link>
//           </li>
//           <li>
//             <Link>Contact</Link>
//           </li>
//         </ul>
//         <div className="hamburger" onClick={handleClick}>
//           {click ? <X size={18} /> : <List size={18} />}
//         </div>
//       </div>
//      </div>
//     </NavbarSection>
//   );
// }
// export default Navbar;


import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';

const NavbarSection = styled.div`
  position: sticky;  
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: ' #A9A9A9';
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);
  color: white;
  backdrop-filter: blur(10px);
  align-items: center;
  z-index: 1000; /* Set z-index to a high value for stacking */
  transition: 0.3s ease; /* Add transition property */


  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0rem;

    .logo a {
      color: red;
      font-size: 2rem;
      font-weight: bolder;
    }

    .menu {
      display: flex;

      a {
        color: white;
        font-size: 1.5rem;
        margin: 0 15px; /* Adjust margin */
      }
    }

    .hamburger {
      display: none;
    }

    .icon {
      margin-right: 15px;
      cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
      .menu {
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.9);
        top: 0;
        left: -100%;
        z-index: -3;
        font-size: 2.5rem;
      }

      .menu.active {
        left: 0;
      }

      .hamburger {
        display: block;
      }
    }
  }
`;

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <NavbarSection >
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <span>
              <Link to="/">Adenike</Link>
            </span>
          </div>
          <ul className={click ? 'menu active' : 'menu'}>
            <li>
              <Link>Resume</Link>
            </li>
            <li>
              <Link>Work</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
          <div className="hamburger" onClick={handleClick}>
            {click ? <X size={18} /> : <List size={18} />}
          </div>
        </div>
      </div>
    </NavbarSection>
  );
}

export default Navbar;



