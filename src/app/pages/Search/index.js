import React from "react";
import "./index.scss";
import { Buttons, LinkButtons } from "../../components";

function Search() {
  return (
    <div className="Search">
      <div>
        <label for="name">Enter your name:</label>
        <input type="text" id="name" />
      </div>

      <div>
        <label for="phone">Enter your phone number:</label>
        <input type="tel" id="phone" />
      </div>

      <div>
        <label for="pass">Password (8 characters minimum):</label>
        <input
          type="password"
          id="pass"
          name="password"
          minlength="8"
          required
        />
      </div>

      <div>
        <Buttons>Search</Buttons>
      </div>

      <LinkButtons link="/front" children="Back" />
    </div>
  );
}

export default Search;
