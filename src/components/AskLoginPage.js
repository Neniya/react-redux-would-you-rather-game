import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class AskLoginPage extends Component {
  handleClickLogIn = (e) => {
    this.props.history.push({
      pathname: "/",
      state: { referrer: this.props.path },
    });
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

export default withRouter(connect()(AskLoginPage));
