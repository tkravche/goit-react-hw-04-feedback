import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { createGlobalStyle } from 'styled-components';
import './index.css';

const Global = createGlobalStyle`
body {
  font-size: 24px;
  margin-left: 40px;
  background-color: blanchedalmond;
  color: chocolate;
}
li{
  list-style:none;
}
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
