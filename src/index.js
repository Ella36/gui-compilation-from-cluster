import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Footer from "./components/Footer"
import '@forevolve/bootstrap-dark/dist/css/bootstrap-dark.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
