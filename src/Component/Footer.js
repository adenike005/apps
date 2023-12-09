import React from "react";
import styled from "styled-components";
import themeList from "../data/themeList";


import { CgMail } from "react-icons/cg";




const HeroSEctionStyles = styled.div`
  padding-top: calc(var(--header-height));
  .container {
    padding: 5rem 10rem;

    h1 {
      font-size: 5rem;
      
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "var(--black)" : "var(--lightBlue_1)"};
      font-weight: "bold";
      font-style: unset;
      font-family: 'EB Garamond', cursive;
      /* text-align: center; */
      
    }
    h5{
        color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "var(--black)" : "var(--lightBlue_1)"}; 
        /* text-align: center; */
        font-size: 1.6rem;
        font-family: 'EB Garamond', cursive ;
        font-weight: 100;
        letter-spacing: .2rem;


    }
    .Acon {
      width: 30px;
      height: 30px;
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "var(--black)" : "var(--lightBlue_1)"};
      margin: 0px 10px;
    }
    a{
        /* margin: 3rem 9rem; */
        display: flex;
        /* justify-content: center; */
        align-items: center;
        flex-direction: row;
        font-family: 'EB Garamond', sans-serif ;
        /* border-bottom: 1px solid red; */
        /* width: 230px; */
    }

    span{
        border-bottom: 1px solid red;
    }
    h4{
        color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "var(--black)" : "var(--lightBlue_1)"};  
        font-size: 1.7rem;
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
        font-size: 2.6rem;
        
      }
      h5{
        font-size: 1rem;
        font-weight: 600;
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
        font-size: 2rem;
      }
      h5{
        font-size: .8rem;
        font-weight: 600;
      }
    
    }
  }

`;



  

function HeroSection() {
  
  return (
    
    <HeroSEctionStyles id="hero">
      <div className="container">
 

        <h1>
        Interested to work with me?
        </h1>
        <h5>I’m currently looking to join a team of creative designers and developers.</h5>

       
            <span>

          <a
            href="mailto:adeyinkaadenike992@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CgMail className="Acon" />
             <div><h4>Send me an e-mail</h4></div>
          </a>
            </span>

          <h6>Follow me</h6>
      
          
       
      </div>

     
    </HeroSEctionStyles>
  );
}

export default HeroSection;