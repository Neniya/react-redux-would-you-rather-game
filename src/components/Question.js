import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import QuestionForList from "./QuestionForList";

class Question extends Component {
  render() {
    const { question } = this.props;
    const { name, avatar, answered, optionOne } = question;

    if (question === null) {
      return <p>This question doesen't exist</p>;
    }

    return (
      <div className="question">
        {answered ? <h3> Asked by {name}:</h3> : <h3> {name} asks:</h3>}
        <div className="question-body">
          <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
          <div>
            {answered && <h3>Results:</h3>}
            <h2> Would You Rather:</h2>

            <QuestionForList textQ={optionOne.text} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }, { id }) {
  const question = questions[id];
  return {
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  };
}

export default connect(mapStateToProps)(Question);
