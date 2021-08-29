import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeX from './new/Home';
import Header from './new/Header';


function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomeX} />
      </BrowserRouter>
    </div>
  );
}

export default App;
