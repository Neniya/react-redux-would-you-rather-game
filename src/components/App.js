import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default connect()(App);
