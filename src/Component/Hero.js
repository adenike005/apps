import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import lottie from 'lottie-web';


const Section = styled.section`
  padding: 2rem 0;
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, eum minima ratione assumenda eos totam, voluptas ullam harum sit inventore laudantium deleniti? Expedita fuga totam error ipsa porro voluptatem repudiandae quibusdam ad ut. Vitae id quasi, culpa nulla eligendi ad odio saepe aperiam voluptas pariatur deserunt quos, doloremque corrupti accusamus mollitia aut debitis placeat. Quisquam doloribus alias voluptas quod molestias ad placeat dolor rerum pariatur deleniti, a dignissimos delectus est fugit laborum eos, veritatis odit, quis doloremque officia. Sint consectetur unde fuga doloribus, optio reiciendis architecto blanditiis praesentium eos nostrum voluptatum quas temporibus id. Vero fuga eos corrupti neque officiis nulla explicabo corporis molestias deleniti. Tempora labore culpa ad? Dolores sit natus aliquid. Cupiditate animi dolor, nisi commodi obcaecati aut delectus, alias dolore culpa assumenda vero sequi? Atque est fugiat ipsam amet placeat iste distinctio numquam, eligendi tenetur alias tempora accusantium error rerum architecto veritatis at quod porro magni dolorem voluptatibus voluptatum eveniet fugit necessitatibus. Corrupti rerum ipsam nemo odit aut beatae ducimus dolorum! Debitis eaque pariatur molestiae. Laboriosam vitae quos cumque quae quasi provident eligendi. Ullam nesciunt adipisci odio deleniti repellendus? Velit, explicabo repellendus ullam, rerum possimus facere omnis quas dolorem est perspiciatis ea architecto suscipit obcaecati molestias cum illo et doloremque atque, voluptas quia debitis fugiat beatae tempora. Sunt sint, aliquid totam, fuga dicta, nesciunt facilis sapiente est earum alias cumque dignissimos dolores minus deleniti. Et reiciendis natus iste ad corporis quibusdam cumque dicta doloribus minus cum nisi quisquam ex iure obcaecati facere quaerat omnis, tempore ipsa quos nulla assumenda quidem! Quae, ducimus aperiam odit, nam laborum blanditiis minus, tempora animi id alias debitis exercitationem aliquid! Doloremque atque et debitis nisi. Delectus ipsa saepe repudiandae facilis ad illum, doloremque quibusdam possimus praesentium tempore exercitationem sunt amet reprehenderit incidunt placeat explicabo vel? Aliquam, aut neque. Temporibus laboriosam rerum quo, aliquid, culpa harum laudantium illo exercitationem cupiditate delectus nulla. Debitis deserunt et praesentium, perspiciatis inventore, dolorem nobis fugiat sequi velit magnam vel quisquam, itaque nemo quasi architecto hic distinctio similique rem voluptatum accusamus eligendi error dolores. Soluta dicta nisi, facilis eligendi id error ipsam, a et est hic nam, temporibus omnis itaque accusantium quas aut voluptatem rem blanditiis harum? Iste neque vero alias provident sint voluptates minima quod molestiae, soluta possimus voluptas molestias aspernatur adipisci fugiat quae eaque voluptatum, officia exercitationem animi! Sint dolor ratione cum, cupiditate, incidunt veritatis, ducimus nihil commodi repudiandae ab enim! Nihil dolorem tempora ea quas similique esse sunt praesentium voluptas doloribus, ratione a nemo quae voluptatem mollitia non rem provident? Corrupti, quidem rerum. Temporibus accusantium ratione nulla nobis quos facilis aperiam aliquid obcaecati, impedit, voluptates pariatur, et dolor. Vero neque deserunt, quae laudantium ipsum facere porro totam illum quia temporibus! Autem optio eaque distinctio commodi cupiditate aut iure quisquam nemo, quibusdam id itaque quod doloremque voluptates suscipit error laboriosam dolore possimus velit, obcaecati inventore sunt ex assumenda asperiores! Sed ab eligendi, molestias magni deleniti pariatur labore dignissimos repellat reiciendis, molestiae iste! Recusandae eligendi cumque sequi sit neque fugiat minima aspernatur dolor adipisci, et ea sint!
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











