import * as React from 'react';
import './styles.css'

export default class Footer extends React.Component {
  public render() {
    return (
        <footer className="container-fluid text-left bg-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 border-right">
                <h4>Where</h4>
                <p>Sam and Wendy’s place in New Market, Auckland New Zealand</p>
                <ul>
                <ul>
                  <li>15 Bristol Road</li>
                  <li>Whenuapai</li>
                  <li>Auckland</li>
                  <li>0618</li>
                  <li>New Zealand</li>
                </ul>
                </ul>
              </div>
              <div className="col-sm-4 border-right">
                <h4>When</h4>
                <p>2<sup>nd</sup> February 2019</p>
              </div>
              <div className="col-sm-4">
                <h4>Dress</h4>
                <p>In the imortal words of Kurt Cobain, come as you are, as a friend!</p>
                <p>Dress nicely, dont worry about suits, but would be good if you looked smart.</p>
              </div>
            </div>
          </div>
      </footer>
    );
  }
}
