import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import NotFound from './components/Error/notFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <NotFound />
); 

