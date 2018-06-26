import * as React from 'react';
import '../App.css';

class Location extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <div className="container bg-3 text-left">    
        
          <div className="row bg-box">
            <h3><span className="glyphicon glyphicon-map-marker" /><u> Location</u></h3>
            <p>Sam and Wendy’s place in New Market, Auckland New Zealand</p>
            <ul>
              <li>15 Bristol Road</li>
              <li>Whenuapai</li>
              <li>Auckland</li>
              <li>0618</li>
              <li>New Zealand</li>
            </ul>
          </div>
          <div className="row bg-box">  
            <br /><br />
            <div className="col-sm-12" >
              <a href="https://www.google.co.uk/maps/place/15+Bristol+Rd,+Whenuapai,+Auckland+0618,+New+Zealand/@-36.7784514,174.6050427,15.65z/data=!4m5!3m4!1s0x6d0d3e2872f52671:0xa74bdffc3c2d4722!8m2!3d-36.7789879!4d174.6075082" target="_blank">
              <img src={ require("../images/gm.png")} className="img-responsive image-content" alt="Image" />
              </a>
            </div>
            <br />
          </div>
        </div><br />
       <br /><br />
      </React.Fragment>
    );
  }
}

export default Location;
