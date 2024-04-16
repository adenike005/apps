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
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est, accusantium numquam corporis et aspernatur unde neque in possimus saepe ab ullam voluptatibus. Corporis alias assumenda earum provident quos odio facere quidem culpa optio iusto dolor iste nulla a non consequatur enim eum tempore ad inventore eius exercitationem velit quam, ratione sit! Assumenda soluta beatae nemo molestias cum autem sequi tempore! Facere, aliquam ad laboriosam consequatur itaque assumenda ducimus veritatis laborum mollitia. Labore cupiditate, nam incidunt excepturi magni quidem vel ipsa eveniet tempora at magnam enim error qui voluptas ducimus non veniam omnis dolorem sunt blanditiis tempore? Quae voluptas voluptatem molestiae ea cumque quas corporis optio commodi sapiente? Fugiat amet, natus voluptate eaque ducimus, esse itaque fugit quae eveniet similique doloremque expedita iste consequuntur perferendis quis exercitationem. Maxime voluptatibus recusandae unde iure debitis, facere quis qui asperiores esse, aliquid illum? Laudantium alias consectetur, soluta adipisci obcaecati unde laborum suscipit, beatae autem, sit tempore repellendus. Dolores hic, repellendus adipisci, minus accusantium suscipit asperiores possimus tempore vel recusandae quia nesciunt? Itaque soluta cum, omnis molestiae ut aliquid necessitatibus enim minima eos ad saepe ipsum odit illo et error perspiciatis fuga commodi quo dolore ullam qui tempora totam placeat. Ipsam a inventore accusamus exercitationem porro, dignissimos aut quibusdam temporibus, vel veritatis consequuntur similique ducimus? Exercitationem, a! Quisquam alias accusamus qui dolorem, minus, quae commodi asperiores eveniet fugit aut, incidunt quidem. Sunt amet placeat suscipit ipsum debitis, ipsam beatae odit veritatis eum nesciunt tempore impedit sapiente officia autem obcaecati itaque incidunt numquam esse quasi ut tempora mollitia deleniti repudiandae nam? Voluptatibus doloribus nisi, cupiditate cumque at magni reiciendis non possimus itaque maxime? Quaerat, impedit perspiciatis temporibus dolore sunt ipsa ipsam ea error nisi laborum ex, odit at sequi eaque saepe omnis aliquid nulla adipisci magnam iste reprehenderit sapiente alias fuga. Nulla esse beatae porro ipsum dolores similique, earum saepe iure veritatis repellat explicabo fuga. Blanditiis debitis eos voluptates vitae quisquam ea nam cumque praesentium, commodi omnis enim ad dicta eum incidunt sapiente delectus qui accusamus officia aliquam eaque, dolor unde dolorem magni a? Fuga cum, omnis eveniet quidem ratione quibusdam quo quam asperiores dolorem esse nisi consectetur. Minima voluptas blanditiis culpa necessitatibus dignissimos quos amet iure nostrum alias ratione accusantium tenetur laboriosam est quae, quaerat facere nisi explicabo, non ad. Asperiores doloribus quisquam a quibusdam. Minima, aperiam laboriosam impedit ut ducimus neque, nulla deleniti vitae saepe dolor quod! Temporibus ipsum facere consequatur, libero incidunt nemo consectetur fuga eius similique ad magnam illum itaque ab quidem porro officiis quas, architecto dicta, voluptates quod nobis adipisci cumque eum iste. Maxime earum sequi fuga eveniet aut exercitationem vero aspernatur, molestiae, modi omnis voluptate soluta laboriosam ad magni velit sunt voluptatibus suscipit nobis dolore id vel dolorum hic minus amet. Commodi sed libero amet maiores voluptates quos nesciunt incidunt labore esse voluptate excepturi possimus perferendis laborum, praesentium beatae, et laudantium? Quidem repudiandae fuga saepe nostrum inventore impedit. Nobis, nulla quam reprehenderit, expedita unde asperiores corrupti eum tempora tenetur voluptatibus, quod ipsa dolore enim minus numquam? Culpa, molestiae nihil.</h1>
          </div>
        </div>
        
      </div>
    </FooterSection>
  );
}

export default Footer;
