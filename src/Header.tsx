import * as React from 'react';
import './styles.css'

export default class Header extends React.Component {
  public render() {
    return (
        <div className="jumbotron">
            <div className="container text-center">
                <h1>Jason and Summers Wedding with  little Control!</h1>      
                <p>Some text that represents "Me"...</p>
            </div>
        </div>
    );
  }
}