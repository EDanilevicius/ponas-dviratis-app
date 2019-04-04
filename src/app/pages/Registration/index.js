import React from "react";
import { LinkButtons, Buttons, FileUpload } from "../../components";
import "./index.scss";

function Registration() {
  return (
    <div className="Registration">
      <h2>Contacts</h2>
      <div className="Registration-contacts">
        <form>
          <div>
            <label for="name">Customer name:</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label for="phone">Phone number:</label>
            <input type="tel" id="phone" />
          </div>

          <div>
            <label for="current-date">Registration date:</label>
            <input type="date" id="current-date" />
            <label for="pickup-date">Pickup date:</label>
            <input type="date" id="pickup-date" />
          </div>
          <div>
            <label for="bicycle">Bicycle:</label>
            <input type="text" id="bicycle" />
          </div>
        </form>
      </div>
      <h2>Registration details</h2>
      <div className="Registration-list">
        <form>
          <label for="tire-fix">Tire fix:</label>
          <input type="text" id="tire-fix" />
          <label for="repair-package">Repair package:</label>
          <input type="text" id="repair-package" />

          <label for="full-repair-package">Full package:</label>
          <input type="text" id="full-repair-package" />
          <label for="gear-adjustment">Gear adjust:</label>
          <input type="text" id="gear-adjustment" />

          <label for="brake-adjustment">Brake adjust:</label>
          <input type="text" id="brake-adjustment" />
          <label for="wheel-alignment">Wheel align:</label>
          <input type="text" id="wheel-alignment" />

          <label for="else">Else:</label>
          <input type="text" id="else" />
        </form>
        <FileUpload />
        <Buttons children="Register" />
      </div>
      <LinkButtons link="/front" children="Back" />
    </div>
  );
}

export default Registration;
