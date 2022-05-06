
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'swiper/css';
import 'swiper/css/pagination';
import "aos/dist/aos.css";
import reportWebVitals from './reportWebVitals';
import 'sweetalert2/dist/sweetalert2.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ,
  document.getElementById('root')
);

reportWebVitals();
