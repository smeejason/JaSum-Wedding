import * as React from 'react';
import '../App.css';
import FramedPicture from '../FramedPicture';

class Home extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <div className="container bg-3 text-left">  
          <div className="row bg-box">
            <h3><span className="glyphicon glyphicon-grain" /><u>We’re getting married!!!</u></h3>
            <p>You already know that, but how else does one start?</p>
            <p>So, Summer Brines & Jason Visser are joining forces to become a party-loving, food-appreciating, creative-coding, couch-snuggling, home-decorating, travel-addicted duo. </p>
            <p>Born in the southern hemisphere but united on the other side of the planet in the wondrous city London.  Specifically, 25 Gerrard St, Chinatown, the business (aka party) premises of the former Web Media 360 (now WM Reply).  Summer was sitting next to her pal Liz, wafts of bbq pork & dumplings tantalizing her nose, when in walked “The Visser” all suited up.  Liz and Summer turned to each other with knowing looks, some talent had definitely just arrived.</p>  
            <p>It soon became clear to Summer that this Jason character was a social being and definitely the guy to have around in the case of an impromptu party.   This appealed a great deal to the Frisbee tournament frolicking Summer and the crush was quick to develop.  JASON MAYBE WRITE SOMETHING <b><i><q>Jason: she's not the boss of me and i built this website!</q></i></b></p>
            <p>After the standard flirtatious period (sounds kind of like crustaceous period) and a well-timed ultimatum an anniversary date was established and an amazing relationship began to grow.  </p>
            <p>Since that day over three years ago now so much has happened. We moved in together, rapidly, much to Wendy’s shock!  We have travelled to New Zealand and through Africa and all around Europe.  We have bought and decorated a home together.  We have played the best beach Frisbee tournament in the world together.  We (Jason) have(has) supported each other(me) through career changes(thanks Jason!!).  We have encouraged each other’s creativity.  And most importantly we've become better people together.</p>
            <p>Love Summer</p>
          </div>  
          <br />
        </div>
        <div className="container bg-3 text-left">  
          <div className="row">
            <FramedPicture title="Our engagement photo!" description="On this magical day Summer the amazing girl Brines said yes to a very loved up Jason Visser, I popped the question in Wales on a weekend camping trip." imageUrl={require("../images/random/engage.jpg")} className="col-sm-12"/>
          </div>
        </div>
        <br /><br />
        <div className="container bg-3 text-left">  
          <div className="row bg-box">
            <h3><u>Important Information?</u></h3>
            <p>Date - 2nd February 2019</p>
            <h3><u>Where's it at yo?</u></h3>
            <p>361 Muriwai Valley Road, Muriwai, Auckland, New Zealand</p>
            <h3><u>What is happening</u></h3>
            <p>This is just a party, we will be getting married in a registry office in Auckland the day before.</p>
            <h3><u>Should I bring anything?</u></h3>
            <p>All we want is your company, love, good vibes and photos, so please amateur and professional photographers alike take photos and share them. if you really feel like you need to do something then please donate to an animal charity of your choice.</p>
            <h3><u>What is the dress code</u></h3>
            <p>The theme is festival and fabulous, so this interpretation is open to you, just know this: The more ridiculous you feel at the beginning the more amazing you will feel as the night goes on, so bring out that crazy.</p> 
          </div>  
        </div>
        <div className="container bg-3 text-left">  
          <div className="row">
            <FramedPicture title="My 40th birthday festival" description="The girl and I love a festival, this photo was one of the days on the extremely deboucherous Shindig Festival." imageUrl={require("../images/random/fest1.jpg")} />
            <FramedPicture imageUrl={require("../images/random/fest2.jpg")} landscape={false} />
            <FramedPicture imageUrl={require("../images/random/fest3.jpg")} />
            <FramedPicture imageUrl={require("../images/random/fest4.jpg")} />
          </div>
        </div>
        <br /><br />
      </React.Fragment>
    );
  }
}

export default Home;
