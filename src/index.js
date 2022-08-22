import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import data from './data/data';

import './index.css';
import './reset.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
    <Statistics title="Upload stats" stats={data} />
  </React.StrictMode>
);
