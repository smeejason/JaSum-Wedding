import * as React from 'react';
import { Link } from 'react-router';
import './styles.css';


export default class Navigation extends React.Component {
  public render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />                        
            </button>
            <Link className="navbar-brand" to="/">Jasum Wedding!!!</Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li><Link to="/home" activeClassName="active">Home</Link></li>
              <li><Link to="/gallery" activeClassName="active" >Gallery</Link></li>
              <li><Link to="/location" activeClassName="active">Location</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link className="glyphicon glyphicon-log-in" activeClassName="active" to="/rsvp"> RSVP</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}