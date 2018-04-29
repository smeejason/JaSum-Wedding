import * as React from 'react';
import './styles.css'

export default class Header extends React.Component {
    public profileImg = require("./images/Profile.jpg");

    public render() {
        return (
            <React.Fragment>
                <div className="jumbotron">
                    <div className="container text-left" />
                </div>
                <div className="profile-image">
                    <img src={this.profileImg} className="img-responsive" />
                </div>
            </React.Fragment>
        );
    }
}