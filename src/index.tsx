import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppRouter } from './Router';

// import App from './App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
