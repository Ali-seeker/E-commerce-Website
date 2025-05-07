import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="679101494818-h9kd80um4f0hiq8dpvrp83stacqv2kj6.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
