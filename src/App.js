import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Nav from "./Nav";
import Blog from "./Blog";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


const headerCopy="good enough developer-er-er";
const websiteCopy = `heres a bunch of words that I'm typing kind of string of consiously about how I need a block of text and I can't just shortcut my way into a block of text so I gotta mash some keys manually.`;
const linknames = [
  {text:'home', path :"/"},
  {text:'blog', path :"/blog"}
  ]
function App() {
  return (
    <Router>
      <Header content={headerCopy} />
      <Nav links={linknames} />
      <Switch>
        <Route path="/blog/:blogId">
          <Blog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
      
      
      {/* <div className="container">
        <Header content={headerCopy} headerLinks={linknames} />
        <Main content={websiteCopy} />
        <Footer />
      </div> */}
    </Router>
  );
}

function Home(){
  return <h1> You are Home</h1>
}

function BlogList(){
  return <h1> You are on the Blog List</h1>
}

export default App;
