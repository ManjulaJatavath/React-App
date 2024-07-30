// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import 'bootstrap/dist/css/bootstrap.css'
// import CBC from './CBC';
// import FBC from './FBC';
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//     <CBC />
//     <FBC />
//   </React.StrictMode>,
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Main App component
import 'bootstrap/dist/css/bootstrap.css'; // Bootstrap CSS for styling
const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
