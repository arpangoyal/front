import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  const [search, setsearch] = useState("");

  return (
    <nav className="navbar navbar-expand-lg bg-body-dark">
      <div class="container-fluid m-4">

        <Link className="navbar-brand text-light" to="/">
          Movie Cafe
        </Link>
        <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light active" to="/filter/series">
                Series-Netflix
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light active" to="/filter/bollywood">
                Bollywood-South
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light active" to="/filter/hollywood">
                Hollywood
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light active" to="/filter/all">
                All
              </Link>
            </li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
            {search ? (
              <Link to={`/search/${search}`}>
                <button
                  className="btn btn-outline-success"
                  type="submit"
                >
                  Search
                </button>
              </Link>
            ) : (
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="button"
              >
                Search
              </button>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
}
