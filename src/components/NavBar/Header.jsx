import React from "react";
import "./styles.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <img src="LogoMenu.png" alt="logo Aluraflix" />
        </div>
        <nav className="nav">
          <ul className="nav__links">
            <li>
              <a href="/" className="nav__home">
                HOME
              </a>
            </li>
            <li>
              <a href="/" className="nav__novovideo">
                NOVOVÌDEO
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
