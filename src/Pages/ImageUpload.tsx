import * as React from 'react';
import '../App.css';

class ImageUpload extends React.Component {
  public readUploadedFileAsText2 = (inputFile:File) => {
    const reader = new FileReader();
    reader.readAsBinaryString(inputFile);
    reader.onload = (e:any) => {
			alert(e.srcElement.result);
		}
  }

  public onFileUploadChange = (e:any) => {
    try {
    this.readUploadedFileAsText2(e.target.files[0])  
    } catch (e) {
      // console.warn(e.message)
    }
  }
    
  public render() {
    return (
      <React.Fragment>
        <div className="container bg-3 text-left">
          <div className="row bg-box">
            <h3><span className="glyphicon glyphicon-map-marker" /><u> Upload Image</u></h3>
            <p>Use this page to upload an image and apply meta tagging.</p>
          </div>
          <div className="row bg-box">
            <br /><br />
            <div className="col-sm-12" >
              <input type="file" onChange={this.onFileUploadChange} />
            </div>
            <br />
          </div>
        </div><br />
       <br /><br />
      </React.Fragment>
    );
  }
}

export default ImageUpload;
