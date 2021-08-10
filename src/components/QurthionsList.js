import React, { Component } from "react";
import Question from "./Question";

class QuestionsList extends Component {
  render() {
    return (
      <ul>
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
