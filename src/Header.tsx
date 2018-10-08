import * as React from 'react';
import './styles.css'

export default class Header extends React.Component {
    public profileImg = require("./images/Profile.jpg");

    public render() {
        return (
            <React.Fragment>
                <div className="jumbotron">
                    <div className="container text-left">
                        <div className="bg-title">
                            <h1>Jason and Summer</h1>
                            <h2> <span className="glyphicon glyphicon-calendar" /> 2<sup>nd</sup> February 2018</h2>
                            <h2> <a href="https://www.google.com/maps/place/361+Muriwai+Valley+Rd,+Waitakere,+Muriwai+0881,+New+Zealand/@-36.8242125,174.4842177,17z/data=!3m1!4b1!4m5!3m4!1s0x6d0d132c8eca726b:0xae6c78b0f982c479!8m2!3d-36.8242125!4d174.4864064" target="_blank"><span className="glyphicon glyphicon-map-marker" /> Auckland, New Zealand</a></h2>
                        </div>
                    </div>
                </div>
                <div className="profile-image">
                    <img src={this.profileImg} className="img-responsive" />
                </div>
            </React.Fragment>
        );
    }
}
