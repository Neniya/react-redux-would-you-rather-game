import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class Nav extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };
  handleLogOut = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(setAuthedUser(null));
    this.props.history.push(`/`);
  };
  render() {
    const user = this.props.user;
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              exact
              activeClassName="active"
              className="nav-link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" activeClassName="active" className="nav-link">
              New question
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/leaderboard"
              activeClassName="active"
              className="nav-link"
            >
              Leader board
            </NavLink>
          </li>
        </ul>
        <div className="user-log-out">
          <p className="user-name">
            <b>Hello</b>, {user ? user.name : ""}
          </p>
          <p
            className="log-out"
            onClick={(e) => {
              this.handleLogOut(e);
            }}
          >
            <b>Log out</b>
          </p>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    user: users[authedUser],
  };
}

export default withRouter(connect(mapStateToProps)(Nav));
