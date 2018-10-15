import * as React from 'react';
import '../App.css';
import Map from '../Map';

class Location extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <div className="container bg-3 text-left">
          <div className="row bg-box">
            <h3><span className="glyphicon glyphicon-map-marker" /><u> Location</u></h3>
            <p>361 Muriwai Valley Road, Muriwai, Auckland, New Zealand.</p>
          </div>
          <div className="row bg-box">
            <br /><br />
            <div className="col-sm-12" >
              <Map longitude={-36.8242125} latitude={174.4842177} enabled={true} zoom={14} className="location-map" />
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
