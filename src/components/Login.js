import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import PropTypes from "prop-types";

class Login extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
  };
  state = {
    userId: "",
  };
  handleChange = (e) => {
    const userId = e.target.value;

    this.setState(() => ({
      userId,
    }));
  };

  handleUserSubmit = (e) => {
    e.preventDefault();
    const { userId } = this.state;
    const { dispatch } = this.props;
    dispatch(setAuthedUser(userId));
    this.props.history.push(`/dashboard`);
  };
  render() {
    return (
      <div className="sign-in">
        <h1>Welcome to Would You Rather Game!</h1>
        <img
          src="https://cdn.pixabay.com/photo/2017/08/12/21/09/scale-2635397_1280.jpg"
          alt="Would you rather?"
          width="200"
        />
        <form
          className="sign-in sign-in-box"
          onSubmit={(e) => this.handleUserSubmit(e)}
        >
          <label htmlFor="select-user">
            <b>Sign in</b>
          </label>
          <select
            className="sign-in-select"
            id="select-user"
            required
            onChange={(e) => this.handleChange(e)}
          >
            <option value="">choose a user</option>
            {this.props.users.map((user) => (
              <option className="user-option" key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}
export default connect(mapStateToProps)(Login);
