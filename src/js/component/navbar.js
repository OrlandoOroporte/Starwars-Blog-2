import React from "react";
import { Link } from "react-router-dom";
import Star_Wars_Logo_xtrafondos from "/workspace/Starwars-Blog-2/src/img/Star_Wars_Logo_xtrafondos.jpg";

export const Navbar = () => {
  return (
    <nav id="navbar-example2" className="navbar bg-light px-3 mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img src={Star_Wars_Logo_xtrafondos} alt="el logo" />
        </span>
      </Link>
      <ul className="nav nav-pills">
        <li className="nav-item dropdown">
          <Link
            to="/"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
          >
            Favorite
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="/demo"
                className="dropdown-item"
                href="#scrollspyHeading3"
              >
                Third
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    // <nav classNameName="navbar navbar-light bg-light mb-3">
    // 	<Link to="/">
    // 		<span classNameName="navbar-brand mb-0 h1">React Boilerplate</span>
    // 	</Link>
    // 	<div classNameName="ml-auto">
    // 		<Link to="/demo">
    // 			<button classNameName="btn btn-primary">Check the Context in action</button>
    // 		</Link>
    // 	</div>
    // </nav>
  );
};
