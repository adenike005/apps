import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import phone from '../phone.svg'

const variants = {
  initial: {
    y: 50,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    }
  }
};

const Section = styled.section`
  padding: 0;

  .contact {
    height: 100%;
    max-width: 1366px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .textContainer {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 30px;

      h1 {
        font-size: 5rem;
        line-height: 5rem;
        color: white;
      }

      span {
        font-weight: 300;
        color: white;
      }

      h2 {
        color: white;
      }

      h1, h2, span {
        color: white;
      }
    }

    .formContainer {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: relative;

      .svg{
        width: 100%;
        height: 100%;
        /* background-color: red; */
        position: absolute;
        margin: auto;
        stroke: orange;


        img{
          width: 100%;
          height: 100%;
         
        }
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 10px;

        input, textarea {
          padding: 20px;
          margin-bottom: 10px;
          border: 1px solid white;
          border-radius: 5px;
          color: white;
          width: 100%;
          background-color: transparent;
        }

        button {
          padding: 20px;
          background-color: red;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;

          &:hover {
            background-color: darkred;
          }
        }
      }
    }
  }
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 3rem;
  max-width: 1200px;
`;

const Loader = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000; /* or any color that matches your theme */
  color: white;
  font-size: 2rem;
`;

function Contact() {
  const ref = useRef();
  const isInView = useInView(ref, {margin:'-100px'})
  const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading time
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // Adjust the delay as needed

//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return <Loader>Loading...</Loader>;
//   }

  return (
    <Section>
      <Container>
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate" ref={ref}>
          <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let's Work <br /> together</motion.h1>
            <motion.div className="item" variants={variants}>
              <h2>Mail</h2>
              <span>adeyinkaadenike992@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
              <h2>github</h2>
              <span>github.com/adenike005</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
              <h2>Phone</h2>
              <span>+234-8161215777</span>
            </motion.div>
          </motion.div>
          <div className="formContainer">
          <motion.div className="svg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{duration: 1, delay: 3}}>
          <motion.img src={phone} alt='phone-icon' initial={{pathLength: 0}} animate={isInView &&{pathLength:1}} transition={{duration: 3}}/>
          </motion.div>
            {/* <svg>
                <path
                strokeWidth={0.2}
                fill='none'
                d
                />
            </svg> */}

            
            <motion.form  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1, delay: 3}}>

              <input type="text" required placeholder="Name" />
              <input type="email" required placeholder="Email" />
              <textarea rows={8} placeholder="Message" />
              <button type="submit">Submit</button>
            </motion.form>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

export default Contact;

