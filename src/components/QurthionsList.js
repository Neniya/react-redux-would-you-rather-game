import React, { Component } from "react";

class QuestionsList extends Component {
  render() {
    return (
      <ul>
        {this.props.questions.map((questionId) => (
          <li key={questionId}>{questionId}</li>
        ))}
      </ul>
    );
  }
}

export default QuestionsList;
