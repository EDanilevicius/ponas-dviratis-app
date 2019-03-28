import React from "react";
import "./index.scss";
import logo from "../../static/images/simbolisuzrasas.png";
import logo1 from "../../static/images/ponas-dviratis-logo.jpg";

function PageLayout({ children }) {
  return (
    <div className="PageLayout">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo1} className="App-logo1" alt="logo" />
      </header>

      <div className="Main">{children}</div>

      <div className="Footer">
        <footer>© Ponas Dviratis 2019</footer>
      </div>
    </div>
  );
}

export default PageLayout;
