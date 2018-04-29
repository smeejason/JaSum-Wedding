import * as React from 'react';
import './styles.css'

export default class FramedPicture extends React.Component {
    public SF1 = require("./images/SF1.jpg");
    public Frame1 = require("./images/frame1.png");
  
    public render() {
    return (
        <div className="col-sm-3" >
            <img src={this.SF1} className="img-responsive image-content" alt="Image" />
        </div>
    );
  }
}