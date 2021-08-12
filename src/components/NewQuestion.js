import React, { Component } from "react";

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
    if (!(this.state.textOptionOne && this.state.textOptionTwo)) {
      alert("please complite options!");
    }
  };
  render() {
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
            onChange={(e) => this.handleChange(e, true)}
          ></input>
          <input
            type="text"
            id="new-option-two"
            placeholder="Enter Option Two"
            onChange={(e) => this.handleChange(e, false)}
          ></input>
          <button class="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewQuestion;
