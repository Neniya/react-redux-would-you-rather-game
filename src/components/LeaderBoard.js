import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class LeaderBoard extends Component {
  static propTypes = {
    usersLeaderBord: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className="leader-board">
        <ul className="leader-board-list">
          {this.props.usersLeaderBord.map((user) => (
            <li className="leader-board-user">
              <img
                src={user.avatar}
                alt={`Avatar of ${user.name}`}
                className="avatar"
              />
              <div className="leader-board-info">
                <div className="user-name">
                  <b>{user.name}</b>
                </div>
                <p>
                  Answered questions: <b>{user.answerdQuestions}</b>
                </p>
                <p>
                  Created questions: <b>{user.createdQuestions}</b>
                </p>
              </div>
              <div className=" score ">
                <div>Score </div>
                <div className="score-number">
                  <b>{user.score}</b>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const usersLeaderBord = Object.values(users)
    .map((user) => ({
      avatar: user.avatarURL,
      name: user.name,
      answerdQuestions: Object.keys(user.answers).length,
      createdQuestions: user.questions.length,
      score: Object.keys(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => b.score - a.score);
  return {
    usersLeaderBord,
  };
}
export default connect(mapStateToProps)(LeaderBoard);
