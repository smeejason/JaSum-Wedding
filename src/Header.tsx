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
                            <h2> <a href="https://www.google.co.uk/maps/place/Muriwai,+New+Zealand/@-36.8045613,174.3716463,11.81z/data=!4m5!3m4!1s0x6d0d0d7aa12c1959:0x500ef6143a2e7e0!8m2!3d-36.8362109!4d174.4340691" target="_blank"><span className="glyphicon glyphicon-map-marker" /> Auckland, New Zealand</a></h2>
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