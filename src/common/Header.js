import React from 'react';
import { Route, Link } from 'react-router-dom';

const Header = () => (
  <div className="text-center">
    <nav className="navbar navbar-default">
      <Route exact to="/" activeClassName="active">Home</Route>
      {" | "}
      <Link to="library" activeClassName="active">Library</Link>
    </nav>
  </div>
);

export default Header;