import * as React from 'react';
import './styles.css'

export interface IFramedPictureProps {
    className?: string;
    imageUrl: string;
    landscape?: boolean;
    frameStyle?: string;
}

export default class FramedPicture extends React.Component<IFramedPictureProps, { open:boolean; }> {
    public SF1 = require("./images/SF1.jpg");
    
    public componentDidMount() {
        this.setState({
           open: false,
        });
    }

    public render() { 
        let className = this.props.className ? this.props.className : 'col-sm-3 gallery-img';
        className += this.props.landscape ? " landsccape-img" : "";
    return (
        <React.Fragment>
        <div className={className} >
            <a data-toggle="modal" href="#myModal">
                <img src={ this.props.landscape ? require("./images/F1_1.png") : require("./images/F1.png")} className="img-responsive image-content hover-img" alt="Image" />
                <img src={this.props.imageUrl} className="img-responsive image-content" alt="Image" />
            </a>
        </div>
        </React.Fragment>
    );
  }
}