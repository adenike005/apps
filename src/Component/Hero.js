import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.div`
  padding-top: calc(var(--header-height) + 100px);
  color: #FFFFF7;

  .container {
    .text{
        width: 100%;

        h2{
            font-size: 6rem;
            color: #FFFFF7;
            font-weight: 300;
            font-family: "Lato", sans-serif;
        }
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
    .text{
        width: 100%;

        h2{
            font-size: 3rem;
            color: #FFFFF7;
            font-weight: 300;
            font-family: "Lato", sans-serif;
        }
    }
  }
  }
`;

function Hero() {
  return (
    <HeroSection>
      <div className="container">
        <div className="text">
          <h2>
            Hi 👋🏾 - <span style={{ color: '#4a5568' }}>I'm Adenike</span>, A Nigerian 🇳🇬 based Software Engineer. I
            have a strong passion for designing <span style={{ color: '#4a5568' }}>intuitive</span> and{' '}
            <span style={{ color: '#4a5568' }}>user-friendly</span> experiences.
          </h2>
        </div>
      </div>
    </HeroSection>
  );
}

export default Hero;
