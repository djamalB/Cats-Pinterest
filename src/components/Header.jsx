import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <div className="header">
      <ul className="header__list">
        <li>
          <Link className="header__list-item" to={"/"}>
            Все котики
          </Link>
        </li>
        <li>
          <Link className="header__list-item" to={"favorite"}>
            Любимые котики
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
