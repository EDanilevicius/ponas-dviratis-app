import React from "react";
import "./index.scss";

function Buttons({ ClickEvent, children }) {
  return (
    <button onClick={ClickEvent} className="Buttons" type="submit">
      {children}
    </button>
  );
}

export default Buttons;
