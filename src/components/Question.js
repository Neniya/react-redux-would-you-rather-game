import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import QuestionForList from "./QuestionForList";
import QuestionForm from "./QuestionForm";

class Question extends Component {
  render() {
    const { question } = this.props;

    if (question === null) {
      return <p>This question doesen't exist</p>;
    }
    const { id, optionOne } = this.props.question;
    const questionText = <QuestionForList textQ={optionOne.text} id={id} />;
    return <QuestionForm question={question} questionText={questionText} />;
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
