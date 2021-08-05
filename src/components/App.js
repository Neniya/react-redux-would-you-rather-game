import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return <div>App</div>;
  }
}

export default connect()(App);
