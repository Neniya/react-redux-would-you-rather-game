import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";

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
    if (question === null) {
      return <p>This question doesen't exist</p>;
    }

    const { name, avatar, timestamp, optionOne, optionTwo, id } = question;
    const answersOptionOne = optionOne.votes.length;
    const answersOptionTwo = optionTwo.votes.length;
    const answers = answersOptionOne + answersOptionTwo;
    const persentOptionOne = (answersOptionOne * 100) / answers;

    return (
      <div className="question">
        {this.props.answered ? (
          <h3> Asked by {name}:</h3>
        ) : (
          <h3> {name} asks:</h3>
        )}
        <div>
          <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
          <div>
            <form>
              {this.props.answered && <h2>Results:</h2>}
              <h2> Would You Rather:</h2>
              {this.props.answered ? (
                <div>
                  <p>{optionOne.text}</p>
                  <progress
                    id="percentOne"
                    value={`${persentOptionOne}`}
                    max="100"
                  ></progress>
                  <br />
                  <label htmlFor="percentOne">
                    {answersOptionOne}out of {answers} votes
                  </label>

                  <p>{optionTwo.text}</p>
                  <progress
                    id="percentTwo"
                    value={`${100 - persentOptionOne}`}
                    max="100"
                  ></progress>
                  <br />
                  <label htmlFor="percentTwo">
                    {answersOptionTwo}out of {answers} votes
                  </label>
                </div>
              ) : (
                <div>
                  <input
                    type="radio"
                    name="question"
                    value="optionOne"
                    id="option-one"
                  />
                  <label htmlFor="option-one">{optionOne.text}</label>

                  <input
                    type="radio"
                    name="question"
                    value="optionTwo"
                    id="option-two"
                    onChange={(e) => this.switchOption(e.target.value)}
                  />
                  <label htmlFor="option-one">{optionTwo.text}</label>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }, { id, answered }) {
  const question = questions[id];
  return {
    authedUser,
    answered,
    question: question
      ? formatQuestion(question, users[question.author])
      : null,
  };
}

export default connect(mapStateToProps)(Question);
