import React from 'react';
import '../App.css';

function Nav() {
  return (
    <header className="navigation">
      <ul className="navigation_list">
        <li className="navigation_menu"><a className="navigation_link" lang="en-us" href="/">Home</a></li>
        <li className="navigation_menu"><a className="navigation_link" lang="en-us" href="/">About</a></li>
        <li className="navigation_menu"><a className="navigation_link" lang="en-us" href="/">Services</a></li>
        <li className="navigation_menu"><a className="navigation_link" lang="en-us" href="/">Contact</a></li>
      </ul>
    </header>
  );
}

export default Nav;
