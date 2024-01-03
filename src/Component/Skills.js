import React from "react";
import styled from "styled-components";
import themeList from "../data/themeList";


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
            /* font-family: 'Whisper', cursive; */
            font-family: 'EB Garamond', sans-serif;
            margin-bottom: 2rem;
    }
   .span{
    color: ${({ theme: { theme } }) =>
          theme === themeList.light
            ? "var(--darkBlue_2)"
            : "var(--lightBlue_1)"};
          font-size: 1.5rem;
          margin: 10px 0;
          font-family: 'Whisper', sans-serif;
   }
    .box {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      /* background-color: yellow; */
      font-size: 1.5rem;
      gap: 10px;
      margin-top: 3.5rem;
      
      
      .boxs {
        border-radius: .5rem;
        /* border-width: .5px solid rgb(13,13,13); */
        /* box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.1 ); */
        font-family: 'Whisper', cursive;
       
       
        width: 100%;
        height: 100%;
        padding: 30px;
        text-align: center;
        color: ${({ theme: { theme } }) =>
          theme === themeList.light
            ? "var(--darkBlue_2)"
            : "var(--lightBlue_1)"};
             border: 0.5px solid #FFCCCC;


             &:hover {
      border: 1px solid red; // Add red border on hover
      cursor: pointer;
    }

             
            }
     

    }

 

    
  }
  @media only screen and (max-width: 1200px) {
    .container {
      padding: 1.5rem 1rem;
      .box{
        grid-template-columns: repeat(2, 1fr);
       .boxs{
        padding: 30px;
       }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .container {
      padding: 1.5rem 1rem;
      .box{
        grid-template-columns: repeat(2, 1fr);
       .boxs{
        padding: 30px;
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
        <div className="div">Technologies</div>
        <span className="span">The list of technologies i've learnt and worked with.</span>
        <div className="box">
          <div className="boxs">React-Native</div>
          <div className="boxs">React</div>
          <div className="boxs">Html</div>
          <div className="boxs">Java Script</div>
          <div className="boxs">Flutter</div>
          <div className="boxs">css</div>
          <div className="boxs">normalize.css</div>
          <div className="boxs">Angular</div>
          <div className="boxs">Figma</div>
          <div className="boxs">Java</div>
          <div className="boxs">Firebase</div>
          <div className="boxs">Expo</div>
          <div className="boxs">C#</div>
          <div className="boxs">C</div>
          <div className="boxs">python</div>
          <div className="boxs">Sql</div>
        </div>
      </div>
    </HeroSEctionStyles>
  );
}

export default HeroSection;
