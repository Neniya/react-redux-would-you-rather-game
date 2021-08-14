import React, { Component } from "react";
import { connect } from "react-redux";

class LeaderBoard extends Component {
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
              <div>
                <p>{user.name}</p>
                <p>Answered questions {user.answerdQuestions}</p>
                <p>Created questions {user.createdQuestions}</p>
              </div>
              <p>Score {user.score}</p>
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
