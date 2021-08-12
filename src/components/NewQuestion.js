import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    textOptionOne: "",
    textOptionTwo: "",
  };

  handleChange = (e, optionOne) => {
    e.preventDefault();
    const texOption = e.target.value;
    console.log(texOption);
    optionOne
      ? this.setState(() => ({
          textOptionOne: texOption,
        }))
      : this.setState(() => ({
          textOptionTwo: texOption,
        }));
    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const optionOne = this.state.textOptionOne;
    const optionTwo = this.state.textOptionTwo;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOne, optionTwo));
    this.setState(() => ({
      textOptionOne: "",
      textOptionTwo: "",
    }));
    this.props.history.push(`/dashboard`);
  };
  render() {
    const { textOptionOne, textOptionTwo } = this.state;
    return (
      <div className="question">
        <h2>Crete New Question</h2>
        <p>Complite the options:</p>
        <h3>Would You Rather...</h3>
        <form
          className="new-question-body"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <input
            type="text"
            id="new-option-one"
            placeholder="Enter Option One"
            value={textOptionOne}
            onChange={(e) => this.handleChange(e, true)}
          ></input>
          <input
            type="text"
            id="new-option-two"
            placeholder="Enter Option Two"
            value={textOptionTwo}
            onChange={(e) => this.handleChange(e, false)}
          ></input>
          <button
            className="btn"
            type="submit"
            disabled={
              this.state.texOptionOne === "" || this.state.textOptionTwo === ""
            }
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
