import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbarComponent';
import Main from './components/mainComponent';
import Search from './components/searchComponent';
import Input from './components/inputComponent';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br/>
        <Route path="/" exact component={Main} />
        <Route path="/search" component={Search} />
        <Route path="/input" component={Input} />
      </div>
    </Router>
  );
}

export default App;

