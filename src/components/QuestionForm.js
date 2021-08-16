import React, { Component } from "react";
import PropTypes from "prop-types";

class QuestionForm extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    questionText: PropTypes.object.isRequired,
  };
  render() {
    const { name, avatar, answered } = this.props.question;

    return (
      <div className="question">
        {answered ? <h3> Asked by {name}:</h3> : <h3> {name} asks:</h3>}
        <div className="question-body">
          <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
          <div className="question-text">
            {answered && <h3>Results:</h3>}
            <h2> Would You Rather:</h2>

            {this.props.questionText}
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionForm;
