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
                            <h2> <a href="https://www.google.co.uk/maps/place/15+Bristol+Rd,+Whenuapai,+Auckland+0618,+New+Zealand/@-36.7784514,174.6050427,15.65z/data=!4m5!3m4!1s0x6d0d3e2872f52671:0xa74bdffc3c2d4722!8m2!3d-36.7789879!4d174.6075082" target="_blank"><span className="glyphicon glyphicon-map-marker" /> Auckland, New Zealand</a></h2>
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