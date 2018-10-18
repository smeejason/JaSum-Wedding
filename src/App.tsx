import * as React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
      ga?:any;
 }
}

export interface IAppProps {
  location?: any;
}

class App extends React.Component<IAppProps> {
  public componentDidMount(){
    if (window.ga) {
      window.ga('create', 'UA-127595930-1', 'auto');
    }
}

  public setPageAndSendToGA = (url:string) => {
    window.ga('set', 'page', url);
    window.ga('send', 'pageview');
  };

  public trackGoogleAnalytics = (location:any) => {
    if (window.ga) {

      if (location.search.length === 10) {
        const url = location.pathname + location.search;
        this.setPageAndSendToGA(url);
      }
      else
      {
        const url = location.pathname;
        this.setPageAndSendToGA(url);
      }
    }
  };
  
  public render() {

    this.trackGoogleAnalytics(this.props.location);
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
