import React from "react";
import Hero from "../components/hero.js";
import AdUnit from "../components/adunit.js";
import Body from "../components/body.js";
import Footer from "../components/footer.js";

function News() {
  window.digitalData.page.pageInfo.pageName = "nba:news";
  return (
    <div>
      <Hero
        title="News"
        text="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
      ></Hero>
      <AdUnit></AdUnit>
      <Footer></Footer>
      <Body>
        <p>
          Spicy jalapeno bacon ipsum dolor amet in officia consequat short loin
          drumstick. Pork loin laboris porchetta cupidatat flank. Ut tempor quis
          beef lorem, bacon filet mignon shankle mollit sint in cillum leberkas
          incididunt consequat. Jowl shank non sint tempor qui sirloin cillum in
          consectetur exercitation. Ipsum nostrud do cupim kielbasa shankle
          deserunt pig dolor biltong ex dolore pork chop proident. Pork lorem
          tempor, ut pariatur mollit alcatra dolor beef ribs aliqua in excepteur
          turducken chuck.
        </p>
        <p>
          Chicken consequat ut spare ribs, in est aute in ham reprehenderit
          shank. Mollit brisket dolore flank ut. Voluptate commodo ut tongue.
          Duis corned beef strip steak ham hock, chicken burgdoggen ut id
          andouille consequat cillum in buffalo biltong.
        </p>
        <p>
          Ham hock et culpa beef ut shank frankfurter eiusmod deserunt.
          Voluptate id tenderloin brisket, pastrami venison officia capicola
          reprehenderit strip steak cillum cow. Cupim bacon officia tongue nulla
          cow chislic leberkas meatball proident. Chuck officia dolor fugiat
          pig, salami cow kevin adipisicing. Sirloin labore rump kielbasa, ut
          drumstick et. Do burgdoggen dolore, venison esse aute tongue boudin
          t-bone et. Pork loin ham aliqua, drumstick voluptate swine
          reprehenderit commodo andouille sint.
        </p>
        <p>
          Ground round in swine spare ribs. Bacon shoulder cupim mollit tri-tip
          salami boudin chuck, doner occaecat. Pork loin boudin id turkey anim,
          landjaeger laborum turducken eiusmod cow kielbasa. Ut quis short ribs
          eu, ut corned beef boudin sausage filet mignon tri-tip dolore. Chuck
          dolore ribeye, chicken pork chop biltong laborum sausage fugiat culpa.
          Chuck tongue ullamco burgdoggen et ipsum, shankle quis chislic eiusmod
          fugiat. Beef ham hock pork loin, andouille ullamco veniam commodo
          bresaola.
        </p>
        <p>
          Consectetur shankle venison dolore strip steak quis reprehenderit
          cillum in sint fugiat filet mignon enim ham hock kielbasa. Eu buffalo
          boudin pig venison hamburger. Nisi filet mignon minim, veniam ground
          round ex alcatra pork belly short loin chicken fatback. Labore culpa
          enim pork chop flank boudin, corned beef bacon turducken burgdoggen
          buffalo ad. Sirloin short ribs meatloaf, ipsum in ground round velit
          venison laborum tri-tip sunt. Officia kielbasa dolore incididunt minim
          bresaola buffalo exercitation drumstick.
        </p>
      </Body>
    </div>
  );
}

export default News;
