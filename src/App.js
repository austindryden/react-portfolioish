import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const content = `heres a bunch of words that I'm typing kind of string of consiously about how I need a block of text and I Cant just shortcut my way into a block of text so I gotta mash some keys manually.`;

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main content={content} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
