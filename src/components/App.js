import React, { Component } from "react";
import "../App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Question from "./Question";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {this.props.loading === true ? null : (
            <div>
              <Route path="/" exact component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/question/:id" component={Question} />
            </div>
          )}
        </div>
        ;
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    loading: users === {},
  };
}

export default connect(mapStateToProps)(App);
