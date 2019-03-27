import React, { Component } from "react";
import "./index.scss";
import { Header, Main, Footer } from "./components/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
