import React from "react";
import styled from "styled-components";
import themeList from "../data/themeList";

import { FaAngleDown } from "react-icons/fa";




const HeroSEctionStyles = styled.div`
  padding-top: calc(var(--header-height));
  .container {
    padding: 5rem 10rem;

    h1 {
      font-size: 6.8rem;
      line-height: 8rem;
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "var(--black)" : "var(--lightBlue_1)"};
      font-weight: 200;
      font-style: unset;
      font-family: 'EB Garamond', cursive;
    }
    .hr {
      color: red;
    }
  }
  .scroll {
    display: flex;
    justify-content: flex-end;
  
    padding: 0rem 10rem;
    cursor: pointer;
    color: ${({ theme: { theme } }) =>
        theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
        font-size: 1.5rem;
       
        
  }

 

  @media only screen and (max-width: 1200px) {
    .container {
      padding: 1.5rem 1rem;
      h1 {
        font-size: 2.5rem;
        line-height: 4rem;
      }

    }
    .scroll{
        display: none;
    }
    
  }
  @media only screen and (max-width: 500px) {
    .container {
      padding: 1.5rem 1rem;

      h1{
        font-size: 3rem;
      }
    
    }
  }

`;


function scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
  

function HeroSection() {
  
  return (
    
    <HeroSEctionStyles id="hero">
      <div className="container">
        <h3 className="hr">&lt; h1 &gt;</h3>

        <h1>
          18y/o Software Engineer creating intuitive and <br /> user-friendly
          experiences.
        </h1>

        <h3 className="hr">&lt; /h1 &gt;</h3>
      </div>

      <div className="scroll"onClick={scrollToBottom} >
       
        <span> Scroll down </span>
        
       
      </div>
    </HeroSEctionStyles>
  );
}

export default HeroSection;
