import React from "react";
import styled from "styled-components";
import themeList from "../data/themeList";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const HeroSEctionStyles = styled.div`
  padding-top: calc(var(--header-height));
  .container {
    padding: 5rem 10rem;

    h5 {
      font-size: 1.8rem;
      line-height: 4rem;
      font-weight: 100;

      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "var(--black)" : "var(--lightBlue_1)"};

      font-family: "Whisper", cursive;
    }
    .hr {
      color: red;
      margin-bottom: 3rem;
    }
    .Acon {
      width: 20px;
      height: 20px;
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "var(--black)" : "var(--lightBlue_1)"};
      margin: 0px 10px;
    }
  }
  .scroll {
    display: flex;
    justify-content: flex-end;
    padding: 0rem 10rem;
    cursor: pointer;
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "var(--darkBlue_2)" : "var(--lightBlue_1)"};
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 1200px) {
    .container {
      padding: 1.5rem 1rem;
      h5 {
        font-size: 2rem;
        line-height: 4rem;
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
    <HeroSEctionStyles>
      <div className="container">
        <h3 className="hr">&lt; p &gt;</h3>

        <h5>
          Hi There, <span style={{ color: "red" }}>I'm Adenike</span> <br></br>{" "}
          A software engineer based in Nigeria 🇳🇬 <br /> I'm a self-taught
          developer with a passion for creating intuitive and user-friendly{" "}
          <br /> experiences. <br /> I specialise in building fontend web
          applications and mobile applications with a focus <br />
          on usabilty and simplicity.
        </h5>

        <h3 className="hr">&lt; /p &gt;</h3>
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
