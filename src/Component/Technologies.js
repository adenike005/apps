import React from "react";
import styled from "styled-components";
import themeList from "../data/themeList";
import { Link as ScrollLink } from "react-scroll";
import { TbWorld } from "react-icons/tb";
import { FaFigma,  FaAndroid   } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { AiOutlineApple } from "react-icons/ai";


const HeroSEctionStyles = styled.div`
  padding-top: calc(var(--header-height));
  .container {
    padding: 5rem 10rem;
    .div{
      color: ${({ theme: { theme } }) =>
          theme === themeList.light
            ? "var(--darkBlue_2)"
            : "var(--lightBlue_1)"};
            font-size: 3rem;
            font-family: 'Whisper', cursive;
            margin-bottom: 2rem;
    }
   .span{
    color: ${({ theme: { theme } }) =>
          theme === themeList.light
            ? "var(--darkBlue_2)"
            : "var(--lightBlue_1)"};
          font-size: 1.5rem;
          margin: 10px 0;
          font-family: 'Whisper', cursive;
   }
    .box {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      /* background-color: yellow; */
      font-size: 1.5rem;
      gap: 5px;
      margin-top: 3.5rem;
      
      .boxs {
        border-radius: .5rem;
        border-width: .5px solid red;
        /* box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.1 ); */
        font-family: 'Whisper', cursive;
     
        /* background-color: red; */
       
        width: 100%;
        height: 100%;
        padding: 40px;
        /* text-align: center; */
        color: ${({ theme: { theme } }) =>
          theme === themeList.light
            ? "var(--darkBlue_2)"
            : "var(--lightBlue_1)"};
             border: 1px solid red;
        
      }
      .aron{
        width: 20px;
        height: 20px;
        margin: 5px;
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    .container {
      padding: 1.5rem 1rem;
      .box{
        grid-template-columns: repeat(2, 1fr);
       .boxs{
        padding: 40px;
       }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .container {
      padding: 1.5rem 1rem;
      .box{
        grid-template-columns: repeat(1, 1fr);
       .boxs{
        padding: 40px;
       }
      }
    }
  }

 

  /* @media (min-width: 768px) {
    .container{
        padding:  1.5rem 1rem;
    h1{
        font-size: 6rem;
        line-height: 4rem;
    }
    }
} */
`;

function HeroSection() {
  return (
    <HeroSEctionStyles id="skill">
      <div className="container">
        <div className="div">Skills
</div>
      
        <div className="box">
          <div className="boxs">
          <TbWorld size={20} className="aron"/>
          <MdOutlineWeb className="aron" />

          <h4>Web developnment</h4>
        </div>
        <div className="boxs">
          <FaAndroid 
 size={20} className="aron"/>
          <AiOutlineApple
 className="aron" />

          <h4>Mobile developnment</h4>
        </div>
        <div className="boxs">
          <MdOutlineWeb size={20} className="aron"/>
          <FaFigma className="aron" />

          <h4>UI/UX Design</h4>
        </div>
          
         
        </div>
      </div>
    </HeroSEctionStyles>
  );
}

export default HeroSection;