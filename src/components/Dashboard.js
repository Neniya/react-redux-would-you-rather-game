import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionsList from "./QurthionsList";

class Dashboard extends Component {
  state = {
    answeredQuestionPage: false,
  };

  changeQuestionPage = (answered) => {
    this.setState(() => ({
      answeredQuestionPage: answered,
    }));
  };
  render() {
    console.log("dashboard", this.props);
    return (
      <div>
        <button onClick={() => this.changeQuestionPage(false)}>
          Unanswerd Questions
        </button>
        <button onClick={() => this.changeQuestionPage(true)}>
          Answerd Questions
        </button>

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

  console.log(answeredQuestions);
  console.log(unansweredQuestions);
  return {
    user,
    answeredQuestions,
    unansweredQuestions,
  };
}

export default connect(mapStateToProps)(Dashboard);
