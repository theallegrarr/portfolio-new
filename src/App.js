import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeX from './new/Home';
import Footer from './new/Footer';
import Header from './new/Header';
import Articles from './new/Articles';


function App() {
  

  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <div className="padded">
              <Header />
              <Route exact path="/" component={HomeX} />
              <Route path="/articles" component={Articles} />
            </div>
            <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
