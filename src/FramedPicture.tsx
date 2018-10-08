import * as React from 'react';
import './styles.css'

export interface IFramedPictureProps {
    className?: string;
    imageUrl: string;
    landscape?: boolean;
    frameStyle?: string;
    title?: string;
    description?: string;
}

export default class FramedPicture extends React.Component<IFramedPictureProps, { open:boolean; }> {
    public SF1 = require("./images/SF1.jpg");
    
    public constructor(props:IFramedPictureProps) {
        super(props);
         this.state = {
            open: false
        };
   }

   public toggleModal= ()=>  {
    this.setState({
        open: !this.state.open,
    });
   }
    
    public render() { 
        let className = this.props.className ? this.props.className : 'col-sm-3 gallery-img';
        className += this.props.landscape ? " landsccape-img" : "";
    return (
        <React.Fragment>
        <div className={className} >
            <a data-toggle="modal" onClick={this.toggleModal} href="#myModal">
                <img src={ this.props.landscape ? require("./images/F1_1.png") : require("./images/F1.png")} className="img-responsive image-content hover-img" alt="Image" />
                <img src={this.props.imageUrl} className="img-responsive image-content" alt="Image" />
            </a>
        </div>

        {this.state.open &&  
            <div id="myModal" className="cus-modal" onClick={this.toggleModal}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={this.toggleModal} >&times;</button>
                            <h3 className="modal-title">{this.props.title}</h3>
                        </div>
                        <div className="modal-body">
                            <img src={this.props.imageUrl} className="img-responsive image-content" alt="Image" />
                            <p className="modal-description text-center">{this.props.description}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" onClick={this.toggleModal} >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        }
        </React.Fragment>
    );
  }
}