import * as React from 'react';
import '../App.css';

declare function myMap() : void;


class Location extends React.Component {
  public componentDidMount() {
      myMap();
  }

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
              <div id="googleMap">&nbsp;</div>
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
