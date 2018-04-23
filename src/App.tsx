import * as React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
       <Navigation />
        <Header />
       
        <div className="container-fluid bg-3 text-center">    
          <h3>Some of my Work</h3><br />
          <div className="row">
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" alt="Image" />
            </div>
            <div className="col-sm-3"> 
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Image" />
            </div>
            <div className="col-sm-3"> 
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Image" />
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Image" />
            </div>
          </div>
        </div><br />

        <div className="container-fluid bg-3 text-center">    
          <div className="row">
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Image" />
            </div>
            <div className="col-sm-3"> 
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Image" />
            </div>
            <div className="col-sm-3"> 
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Image" />
            </div>
            <div className="col-sm-3">
              <p>Some text..</p>
              <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Image" />
            </div>
          </div>
        </div><br /><br />
        <Footer />

      </React.Fragment>
    );
  }
}

export default App;
