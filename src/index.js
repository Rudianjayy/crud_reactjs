import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './ReactJSdasar/App'
// import Variabel from './ReactJSdasar/Variabel';
// import StateProps from './ReactJSdasar/StateProps';
// import Map from './ReactJSdasar/Map'
// import LifeCycle from './ReactJSdasar/LifeCycle';
import Crud from './crud';

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>

);


