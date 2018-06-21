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
            <p>It soon became clear to Summer that this Jason character was a social being and definitely the guy to have around in the case of an impromptu party.   This appealed a great deal to the Frisbee tournament frolicking Summer and the crush was quick to develop.  JASON MAYBE WRITE SOMETHING</p>
            <p>After the standard flirtatious period (sounds kind of like crustaceous period haha) and a well-timed ultimatum an anniversary date was established and an amazing relationship began to grow.  </p>
            <p>Since that day over three years ago now so much has happened. We moved in together, rapidly, much to Wendy’s shock!  We have travelled to New Zealand and through Africa and all around Europe.  We have bought and decorated a home together.  We have played the best beach Frisbee tournament in the world together.  We (Jason) have(has) supported each other(me) through career changes(thanks Jason!!).  We have encouraged each other’s creativity.  And most importantly, we have become better people through being together.</p>
            <p>Love Summer</p>
          </div>  
          <br />
        </div>
        <div className="container bg-3 text-right">  
          <div className="row">
            <FramedPicture imageUrl={require("../images/Selfees/8.jpg")} className="col-sm-12"/>
          </div>
        </div>
        <br /><br />
        <div className="container bg-3 text-left">  
          <div className="row bg-box">
            <h3><u>When?</u></h3>
            <p>Date - 2nd February 2019</p>
            <h3><u>Where's it at yo?</u></h3>
            <p>Sam and Wendy’s place in New Market, Auckland New Zealand</p>
            <ul>
              <li>15 Bristol Road</li>
              <li>Whenuapai</li>
              <li>Auckland</li>
              <li>0618</li>
              <li>New Zealand</li>
            </ul>
          </div>  
        </div><br />
      </React.Fragment>
    );
  }
}

export default Home;
