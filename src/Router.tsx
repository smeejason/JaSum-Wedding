import * as React from 'react';
import App from './App';
// tslint:disable-next-line
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
import Gallery from './Pages/Gallery'
import Home from './Pages/Home'
import ImageUpload from './Pages/ImageUpload'
import Location from './Pages/Location'
import Registered from './Pages/Registered'
import RSVP from './Pages/RSVP'

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="/rsvp" component={RSVP} />
        <Route path="/home" component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/location" component={Location} />
        <Route path="/imageUpload" component={ImageUpload} />
        <Route path="/Registered" component={Registered} />
      </Route>
    </Router>
  );
}