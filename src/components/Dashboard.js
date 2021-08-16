import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionsList from "./QuetionsList";
import PropTypes from "prop-types";

class Dashboard extends Component {
  static propTypes = {
    answeredQuestions: PropTypes.array.isRequired,
    unansweredQuestions: PropTypes.array.isRequired,
  };

  state = {
    answeredQuestionPage: false,
  };

  changeQuestionPage = (answered) => {
    this.setState(() => ({
      answeredQuestionPage: answered,
    }));
    if (answered) {
      document
        .getElementById("unanswerd-button")
        .classList.remove("active-button");
      document
        .getElementById("unanswerd-button")
        .classList.add("question-button");
      document.getElementById("answerd-button").classList.add("active-button");
      document
        .getElementById("answerd-button")
        .classList.remove("question-button");
    } else {
      document
        .getElementById("unanswerd-button")
        .classList.add("active-button");
      document
        .getElementById("answerd-button")
        .classList.add("question-button");
      document
        .getElementById("answerd-button")
        .classList.remove("active-button");
      document
        .getElementById("unanswerd-button")
        .classList.remove("question-button");
    }
  };
  render() {
    return (
      <div className="question-list">
        <div className="switch-buttons">
          <button
            id="unanswerd-button"
            className="active-button"
            onClick={() => this.changeQuestionPage(false)}
          >
            <b> Unanswerd Questions </b>
          </button>
          <button
            id="answerd-button"
            className="question-button "
            onClick={() => this.changeQuestionPage(true)}
          >
            <b>Answerd Questions</b>
          </button>
        </div>

        {this.state.answeredQuestionPage ? (
          <QuestionsList
            questions={this.props.answeredQuestions}
            answered={true}
          />
        ) : (
          <QuestionsList
            questions={this.props.unansweredQuestions}
            answered={false}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  const user = users[authedUser];
  const answeredQuestions = user ? Object.keys(user.answers) : [];
  const unansweredQuestions = user
    ? Object.keys(questions).filter(
        (questionId) => !answeredQuestions.includes(questionId)
      )
    : [];

  return {
    answeredQuestions,
    unansweredQuestions,
  };
}

export default connect(mapStateToProps)(Dashboard);
