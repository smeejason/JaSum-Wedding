import axios from 'axios';
import * as React from 'react';
import '../App.css';

class ImageUpload extends React.Component {
  public readUploadedFileAsText2 = (inputFile:File) => {
    const reader = new FileReader();
    reader.readAsDataURL(inputFile);
    reader.onload = (e:any) => {
      alert(e.srcElement.result);
      
      axios.post('http://localhost:7071/api/UploadImage', 
            { 
                fileContent: e.srcElement.result,
                fileName: "test.file",
            })
          .then((response)=> {
            alert("Success!!" + response.data)
          })
          .catch((error)=> {
            alert(error);
          });   
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
