import * as React from 'react';
import '../App.css';
import FramedPicture from '../FramedPicture';

class Home extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <div className="container bg-3 text-left">    
        
          <div className="row bg-box">
            <h3><span className="glyphicon glyphicon-camera" /> Our cheesy photo gallery</h3>
            <p className="col-sm-12">
              Approxomitaly 2 years ago a still very loved up Jason and Summer decided to document their life and love. So we decidedBelow is a timeline of our memorable moments. 
            </p>
          </div>
          <div className="row">
            <FramedPicture imageUrl={require("../images/Selfees/1.jpg")} />
            <FramedPicture imageUrl={require("../images/Selfees/2.jpg")} />
            <FramedPicture landscape={true} imageUrl={require("../images/Selfees/3.jpg")} />
            <FramedPicture imageUrl={require("../images/Selfees/4.jpg")} />
          </div><br />
          <div className="row">
            <FramedPicture landscape={true} imageUrl={require("../images/Selfees/5.jpg")} />
            <FramedPicture imageUrl={require("../images/Selfees/6.jpg")} />
            <FramedPicture landscape={true} imageUrl={require("../images/Selfees/7.jpg")} />
            <FramedPicture landscape={false} imageUrl={require("../images/Selfees/8.jpg")} />
          </div><br />
          <div className="row">
            <FramedPicture landscape={false} imageUrl={require("../images/Selfees/9.jpg")} />
            <FramedPicture landscape={false} imageUrl={require("../images/Selfees/10.jpg")} />
            <FramedPicture landscape={false} imageUrl={require("../images/Selfees/11.jpg")} />
            <FramedPicture landscape={false} imageUrl={require("../images/Selfees/12.jpg")} />
          </div><br />
          <div className="row slideanim">
            <FramedPicture landscape={true} imageUrl={require("../images/Selfees/13.jpg")} />
            <FramedPicture landscape={true} imageUrl={require("../images/Selfees/14.jpg")} />
            <FramedPicture landscape={false} imageUrl={require("../images/Selfees/15.jpg")} />
            <FramedPicture landscape={false} imageUrl={require("../images/Selfees/16.jpg")} />
          </div>
          <div className="row slideanim">
            <FramedPicture landscape={false} imageUrl={require("../images/Selfees/17.jpg")} />
            <FramedPicture landscape={true} imageUrl={require("../images/Selfees/18.jpg")} />
            <FramedPicture landscape={true} imageUrl={require("../images/Selfees/19.jpg")} />
            <FramedPicture landscape={true} imageUrl={require("../images/Selfees/20.jpg")} />
          </div>
        </div><br />
        
       <br /><br />
      </React.Fragment>
    );
  }
}

export default Home;
