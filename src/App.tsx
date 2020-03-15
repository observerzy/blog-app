import React from 'react';
import './App.module.scss';
import Provider from './store/index';
import Router from './router';

function App() {
  return (
    <div>
      <Provider>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
