import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import QuestionForList from "./QuestionForList";
import { Link } from "react-router-dom";

class Question extends Component {
  state = {
    option: "",
  };

  switchOption = (option) => {
    this.setState(() => ({
      option,
    }));
  };
  render() {
    const { question } = this.props;
    console.log(this.props);
    if (question === null) {
      return <p>This question doesen't exist</p>;
    }

    const { name, avatar, optionOne, optionTwo, id, answered } = question;
    const answersOptionOne = optionOne.votes.length;
    const answersOptionTwo = optionTwo.votes.length;
    const answers = answersOptionOne + answersOptionTwo;
    const persentOptionOne = (answersOptionOne * 100) / answers;

    return (
      <div className="question">
        {answered ? <h3> Asked by {name}:</h3> : <h3> {name} asks:</h3>}
        <div className="question-body">
          <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
          <div>
            {answered && <h3>Results:</h3>}
            <h2> Would You Rather:</h2>

            <QuestionForList textQ={optionOne.text} id={id} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  };
}

export default connect(mapStateToProps)(Question);
