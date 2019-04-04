import React from "react";
import Modal from "react-responsive-modal";
import "./index.scss";
import styles from "./index.scss";
import { LinkButtons, Buttons } from "../../components";

class Front extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="Front">
        <LinkButtons link="/search" children="Search" />
        <LinkButtons link="/registration" children="Registration" />
        <LinkButtons link="/worklist" children="Work List" />
        <Buttons ClickEvent={this.onOpenModal}>Login</Buttons>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center={true}
          closeOnEsc={false}
          closeIconSize={38}
          classNames={{
            modal: styles.customModal,
          }}
        >
          <div className="Login-Modal">
            <h2>Connect to Ponas Dviratis</h2>

            <form>
              <label for="username">Username:</label>
              <input type="text" id="username" />
              <label for="user-password">Password:</label>
              <input type="password" id="user-password" />
            </form>
            <Buttons>Login</Buttons>
            <Buttons>Forgot password</Buttons>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Front;
