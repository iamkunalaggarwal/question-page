import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-info navbar-expand-lg">
        <Link to="/" className="navbar-brand">Questions Page</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Main Page</Link>
          </li>
          <li className="navbar-item">
          <Link to="/input" className="nav-link">Add Question</Link>
          </li>
          <li className="navbar-item">
            <Link to="/search" className="nav-link"  >
                  Search
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}