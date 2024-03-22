import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import lottie from 'lottie-web';


const Section = styled.section`
  padding: 2rem 0 0 0;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1200px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 780px) {
    flex-direction: row;
    gap: 2rem;
  }


`;

const Content = styled.div`
  width: 100%;
  margin-top: ${({ mt }) => mt || '0'};
   h5{
    color: white;
    margin-top: -5%;
    margin-bottom: 3%;
    font-size: 1.2rem;
   }
  h3{
    color: white;
    
    font-size: 3rem;
    font-family: "Inter", sans-serif;
    .Button{
      padding: 1rem;
      border: 1px solid #4a5568;
      width: 40%;
      margin-top: 5%;

  
    }
    .Button h4{
      color: white;
      font-size: 1.2rem;
      font-family: "Inter", sans-serif;
      cursor: pointer;
      text-align: center;
    }
  }
  @media (min-width: 900px) {
    width: 50%;

   
  }

  @media (max-width: 900px) {
    

    h3{
      font-size: 2rem;
    }
  }
`;







function Body() {
  const animationData = require("../Images/projects.json");
 
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, [animationData]);
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <Content>
          <h5>👋🏾 hi There i'm 
          <span style={{ color: "#4a5568", fontSize: '1.6rem' }}> Adenike</span>
             </h5>
              <h3>I breathe life into the digital world as a <span style={{color:"#4a5568"}}> frontend developer</span> , fueled by an unbridled passion for creativity and innovation.
              <div className='Button'>
                <h4>Download Cv</h4>
              </div>
              </h3>
          </Content>

          <Content>
            <div ref={container}></div> 
          </Content>
        </ContentWrapper>
      </Container>
    </Section>
  );
}

export default Body;











