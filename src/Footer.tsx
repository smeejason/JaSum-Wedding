import * as React from 'react';
import './styles.css'

export default class Footer extends React.Component {
  public render() {
    return (
        <footer className="container-fluid text-left bg-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 border-right">
                <h4><u>Where</u></h4>
                <p>361 Muriwai Valley Road, Muriwai, Auckland, New Zealand</p>
              </div>
              <div className="col-sm-4 border-right">
                <h4><u>When</u></h4>
                <p>2<sup>nd</sup> February 2019</p>
              </div>
              <div className="col-sm-4">
                <h4><u>Dress</u></h4>
                <p>In the immortal words of Kurt Cobain, come as you are, as you were, as I want you to be, as a friend!</p>
                <p>The theme is festival and fabulous, so this interpretation is open to you, just know this: The more ridiculous you feel at the beginning the more amazing you will feel as the night goes on, so bring out that crazy.</p>
              </div>
            </div>
          </div>
      </footer>
    );
  }
}
