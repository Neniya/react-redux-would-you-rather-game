import React, { Component } from "react";
import Question from "./Question";
import PropTypes from "prop-types";

class QuestionsList extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
  };
  render() {
    return (
      <ul className="list">
        {this.props.questions.map((questionId) => (
          <li key={questionId}>
            <Question id={questionId} answered={this.props.answered} />
          </li>
        ))}
      </ul>
    );
  }
}

export default QuestionsList;
