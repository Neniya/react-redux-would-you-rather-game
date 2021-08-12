import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionsList from "./QuetionsList";
import Nav from "./Nav";

class Dashboard extends Component {
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
      console.log(document.getElementById("unanswerd-button").classList);
      document.getElementById("answerd-button").classList.add("active-button");
      document
        .getElementById("answerd-button")
        .classList.remove("question-button");
      console.log(document.getElementById("answerd-button").classList);
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
    console.log("dashboard", this.props);
    return (
      <div>
        <Nav />

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

  console.log(answeredQuestions);
  console.log(unansweredQuestions);
  return {
    user,
    answeredQuestions,
    unansweredQuestions,
  };
}

export default connect(mapStateToProps)(Dashboard);
