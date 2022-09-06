import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navigator.scss";

function Navigator() {
  return (
    <div id="nativator-field">
      <nav id="nav-layout">
        <ul>
          <li>
            <Link to="/pagination">Pagination</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navigator;
