import React from 'react';
import styled from 'styled-components';
import Clock from './Clock'; // Import the Clock component

const FooterSection = styled.div`
  padding-top: calc(var(--header-height) + 10px);
  color: #FFFFF7;
  font-weight: 300;
  font-family: "Lato", sans-serif;
  
.container{
    .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #4a5568;
    padding: 2rem 0;
  }

  .copy {
    font-size: 1.5rem;
    color: #4a5568;
    font-weight: 400;
    font-family: "Lato", sans-serif;
  }
}
@media only screen and (max-width: 768px) {
    .footer {
        flex-direction: column;
        gap: 10px;
    }
}
 
`;

function Footer() {
  return (
    <FooterSection>
      <div className="container">
        <div className="footer">
          <div className="copy">Built with Reactjs and styled-components</div>
          <div className="count">
            <Clock /> 
          </div>
          
        </div>
        
      </div>
    </FooterSection>
  );
}

export default Footer;
