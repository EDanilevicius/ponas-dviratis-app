import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function LinkButtons({ children, link }) {
  return (
    <div className="Button">
      <Link to={link}>
        <nav>{children}</nav>
      </Link>
    </div>
  );
}
export default LinkButtons;
