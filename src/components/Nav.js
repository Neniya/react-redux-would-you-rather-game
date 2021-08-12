import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends Component {
  render() {
    console.log("nav", this.props);
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
            <NavLink to="/new" activeClassName="active" className="nav-link">
              New question
            </NavLink>
          </li>
        </ul>
        <div>
          <p className="user-name">
            <b>Hello</b>, {user ? user.name : ""}
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

export default connect(mapStateToProps)(Nav);
