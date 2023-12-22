import React from "react";
import styled from "styled-components";
import themeList from "../data/themeList";

import m1 from '../Images/m1.png'
import c2 from  "../Images/c2.png";
import c3 from  "../Images/c3.png";
import { FaGithub} from "react-icons/fa";


import c1 from "../Images/c1.png"


const HeroSEctionStyles = styled.div`
  padding-top: calc(var(--header-height));
  .container {
    padding: 5rem 10rem;
    .box {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 50px;

      .boxs {
        position: relative;
        /* display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px; */
        border: 1px solid rgba(255, 255, 255, 0.4);
        padding: 1rem;

        img.full-width {
          width: 100%;
        }

        &:hover {
          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 2;
          }

          .overlay-text {
            display: block;
          }
        }
      }

      .overlay-text {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 1.5rem;
        z-index: 2;
        font-family: 'EB Garamond', cursive;
        pointer-events: none;
      }
    }

    .Acon {
      width: 20px;
      height: 20px;
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "var(--black)" : "var(--lightBlue_1)"};
      margin: 0px 10px;
    }
    h2,
    p {
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "var(--black)" : "var(--lightBlue_1)"};
    }
    h2 {
      font-size: 5rem;
      margin-bottom: 2rem;
      font-family: "EB Garamond", cursive;
    }
    p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      font-family: "EB Garamond", cursive;
      font-weight: 100;
    }
    .Acon {
      width: 20px;
      height: 20px;
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "var(--black)" : "var(--lightBlue_1)"};
      margin: 10px 10px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .container {
      padding: 1.5rem 1rem;
      .box {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 50px;

      .boxs {
        position: relative;

        gap: 20px;
        border: 1px solid rgba(255, 255, 255, 0.4);
        padding: 1rem;
    }
    }
    }
  }

  @media only screen and (max-width: 500px) {
    .container {
      padding: 1.5rem 1rem;
      h5 {
        font-size: 1.5rem;
      }
    }
  }
`;

function HeroSection() {
  return (
    <HeroSEctionStyles id="project">
      <div className="container">
        <h2>Featured Projects</h2>
        <p>
          Here are some of the projects I've worked on personally or as a team
          leader.
        </p>
        <div className="box">
          <div className="boxs">
            <img src={c1} alt="s1" />
          
            <div className="overlay-text">
                Coffee Mobile App with React-native
                <div className="boss">
                <a href="https://github.com/adenike005/Coffe" target="_blank">
                <FaGithub className="Acon"/>
                </a>
                </div>
            </div>
          </div>
          <div className="boxs">
            <img src={c2} alt="s5" />
            
            <div className="overlay-text">
                Grill food website created with htnl,css,JavaScript
                <div className="boss">
                <a href="">
                <FaGithub className="Acon"/>
                </a>
                </div>
            </div>
          </div>
          <div className="boxs">
            <img src={c3} alt="s5" />
            
            <div className="overlay-text">
             Bank wallet mobile app in react-native
                <div className="boss">
                <a href="https://github.com/adenike005/Bank" target="_blank">
                <FaGithub className="Acon"/>
                </a>
                </div>
            </div>
          </div>

          <div className="boxs">
            <img src={m1} alt="s5" />
            
            <div className="overlay-text">
             Food mobile app in react-native
                <div className="boss">
                <a href="https://github.com/adenike005/App" target="_blank">
                <FaGithub className="Acon"/>
                </a>
                </div>
            </div>
          </div>
         
        </div>
      </div>
    </HeroSEctionStyles>
  );
}

export default HeroSection;
