'use strict';
import React from 'react';
import './App.css';
import Footer from './models/footer.js';
import Header from './models/header.js';
import Main from './models/main.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    )
  }
}
export default App;