import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class WrongPage extends Component {
  handleClickLogIn = (e) => {
    this.props.clikcLogIn(e);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="center-box">
        <p>
          <b>Please log in to continue!</b>
        </p>
        <button className="btn" onClick={(e) => this.handleClickLogIn(e)}>
          <b>Log in</b>
        </button>
      </div>
    );
  }
}

export default withRouter(connect()(WrongPage));
