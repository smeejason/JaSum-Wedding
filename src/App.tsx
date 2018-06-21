import * as React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';



class App extends React.Component<{}> {
  public render() {
    return (
      <React.Fragment>
       <Navigation />
        <Header />
       
        {this.props.children}
        <Footer />

      </React.Fragment>
    );
  }
}

export default App;
