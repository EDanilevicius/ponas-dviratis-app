import React, { Component } from "react";
import "./index.scss";
import { PageLayout } from "./components";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Front, Registration, Search, WorkList } from "./pages";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <PageLayout>
            <Switch>
              <Route exact path="/front" component={Front} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/registration" component={Registration} />
              <Route exact path="/WorkList" component={WorkList} />
              <Redirect exact from="/" to="/front" />
            </Switch>
          </PageLayout>
        </Router>
      </div>
    );
  }
}

export default App;
