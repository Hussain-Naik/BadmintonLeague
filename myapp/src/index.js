import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LeagueContextProvider } from './context/LeagueContext';
import { SessionContextProvider } from './context/SessionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="/BadmintonLeague" >
    <PrimeReactProvider>
      <LeagueContextProvider>
        <SessionContextProvider>
          <App />
        </SessionContextProvider>
      </LeagueContextProvider>
    </PrimeReactProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
