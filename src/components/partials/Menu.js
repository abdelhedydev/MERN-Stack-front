import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Menu extends Component {

  render() {
    return (
      <div>
        <ul className="nav-mobile">
  <li className="header">Art Spread</li>
  <li className="menu-container">
    <input id="menu-toggle" type="checkbox"/>
    <label htmlFor="menu-toggle" className="menu-button">
      <svg className="icon-open" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
      <svg className="icon-close" viewBox="0 0 100 100">
        <path d="M83.288 88.13c-2.114 2.112-5.575 2.112-7.69 0L53.66 66.188c-2.113-2.112-5.572-2.112-7.686 0l-21.72 21.72c-2.114 2.113-5.572 2.113-7.687 0l-4.693-4.692c-2.114-2.114-2.114-5.573 0-7.688l21.72-21.72c2.112-2.115 2.112-5.574 0-7.687L11.87 24.4c-2.114-2.113-2.114-5.57 0-7.686l4.842-4.842c2.113-2.114 5.57-2.114 7.686 0l21.72 21.72c2.114 2.113 5.572 2.113 7.688 0l21.72-21.72c2.115-2.114 5.574-2.114 7.688 0l4.695 4.695c2.112 2.113 2.112 5.57-.002 7.686l-21.72 21.72c-2.112 2.114-2.112 5.573 0 7.686L88.13 75.6c2.112 2.11 2.112 5.572 0 7.687l-4.842 4.84z"/>
      </svg>
    </label>
    <ul className="menu-sidebar">
      <li  ><NavLink to="/">Home <img src="https://image.flaticon.com/icons/svg/159/159695.svg" className="imgicon" alt="" /></NavLink>
      </li>
      <li><NavLink to="/users">List des Users <img src="https://image.flaticon.com/icons/svg/159/159695.svg" className="imgicon" alt="" /></NavLink></li>
      <li><NavLink to="/photos">List des Photos <img src="https://image.flaticon.com/icons/svg/159/159695.svg" className="imgicon" alt="" /></NavLink></li>
    </ul>
  </li>
</ul>

      </div>


    );
  }
}

export default Menu;
