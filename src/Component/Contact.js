import React from "react";
import styled from "styled-components";

import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import { CgMail } from "react-icons/cg";




const HeroSEctionStyles = styled.div`
  padding-top: calc(var(--header-height));
  .container {
    padding: 5rem 1rem;

    h1 {
      font-size: 5rem;
      
      color: white;
      font-weight: "bold";
      font-style: unset;
      font-family: "Inter", sans-serif;
      /* text-align: center; */
      
    }
    h5{
        color: white; 
        /* text-align: center; */
        font-size: 1.6rem;
        font-family: "Inter", sans-serif;
        font-weight: 100;
        letter-spacing: .2rem;


    }
    .Acon {
      width: 20px;
      height: 20px;
      color: white;
      /* margin: 0px 10px; */
      margin-right: 10px;
    }
    a{
        
        display: flex;

        align-items: center;
        flex-direction: row;
        font-family: "Inter", sans-serif;
       
    }

    span{
      border-bottom: 2px solid red;
       display: inline-block; 
       padding: 5px;
       margin-top: 1rem;
       margin-bottom: 2rem;
    }
    h4{
        color:white;  
        font-size: 1.5rem;
    }
    .hr {
      color: red;
    }
    .icon{
      display: flex;
    }
  }
  .scroll {
    display: flex;
    justify-content: flex-end;
  
    padding: 0rem 10rem;
    cursor: pointer;
    color:white;
        font-size: 1.5rem;
       
        
  }
  .follow{
     color: white;
        font-size: 1.2rem;
        font-weight: 100;
        font-family: "Inter", sans-serif;
        margin-bottom: 2rem;

       
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
    
    <HeroSEctionStyles id="contact">
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

          <h6 className="follow">Follow me</h6>
      
          <div className="icon">
          <a href="https://github.com/adenike005" target="__blank">
            <FaGithub size={20} className="Acon" />
          </a>
          <a
            href="https://wa.me/08161215777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="Acon" />
          </a>

          <a
            href="https://www.linkedin.com/in/adeyinka-adenike-6875a4257/"
            target="_blank"
          >
            <FaLinkedinIn className="Acon" />
          </a>
          <a
            href="https://www.instagram.com/adeyinka1853"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="Acon" />
          </a>

          <a
            href="mailto:adeyinkaadenike992@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CgMail className="Acon" />
          </a>
        </div>
       
      </div>

     
    </HeroSEctionStyles>
  );
}

export default HeroSection;
