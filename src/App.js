import React from 'react';
import './App.css';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import HornedBeasts from './HornedBeasts.js'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <Header />
        <Main />
        <Footer />
        <HornedBeasts />
      </div>
    );
  }
}

export default App;