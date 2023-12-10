import React from "react";
import styled from "styled-components";
import themeList from "../data/themeList";





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
      width: 20px;
      height: 20px;
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "var(--black)" : "var(--lightBlue_1)"};
      /* margin: 0px 10px; */
      margin-right: 10px;
    }
    a{
        
        display: flex;

        align-items: center;
        flex-direction: row;
        font-family: 'EB Garamond', sans-serif ;
       
    }

   .flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
   
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "var(--black)" : "var(--lightBlue_1)"};
   }
   p{
       font-family: 'EB Garamond', cursive ;
       font-size: 1.1rem;
       /* letter-spacing: 0.1rem; */
       font-weight: 300;

   }
    
  
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
      .flex{
        flex-direction: column;
        gap: 10px;
      }
    
    }
  }

`;



  

function HeroSection() {
  
  return (
    
    <HeroSEctionStyles id="hero">
      <div className="container">
 

       <div className="flex">
        <p>© 2023 Adenike Adeyinka. All Rights Reserved.</p>
        <p>Built with ReactJs and Normalize.css.</p>
       </div>
        

       
     

        
      
         
       
      </div>

     
    </HeroSEctionStyles>
  );
}

export default HeroSection;