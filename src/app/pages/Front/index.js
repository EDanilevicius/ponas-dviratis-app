import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";


function Front() {
  return (
    <div className="Front">
      <div className="Button">
        <Link to="/search">
          <nav>Search</nav>
        </Link>
      </div>
      <div className="Button">
        <Link to="/registration">
          <nav>Registration</nav>
        </Link>
      </div>
      <div className="Button">
        <Link to="/worklist">
          <nav>Work List</nav>
        </Link>
      </div>
    </div>
  );
}

export default Front;
