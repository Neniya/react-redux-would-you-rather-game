import React, { Component } from "react";
import { connect } from "react-redux";

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
          <ul>
            {this.props.answeredQuestions.map((questionId) => (
              <li key={questionId}>{questionId}</li>
            ))}
          </ul>
        ) : (
          <ul>
            {this.props.unansweredQuestions.map((questionId) => (
              <li key={questionId}>{questionId}</li>
            ))}
          </ul>
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

    questionsIds:
      //{
      //     answerd:
      //     unanswerd:
      // }
      Object.keys(questions).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
      ),
  };
}

export default connect(mapStateToProps)(Dashboard);
