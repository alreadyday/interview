import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';
import { RowListProvider } from './view/context';

ReactDOM.render(
  <React.StrictMode>
    <RowListProvider>
      <App />
    </RowListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
