import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class QuestionForList extends Component {
  handleViewPool = (e, id) => {
    e.preventDefault();
    console.log(id);
    this.props.history.push(`/question/${id}`, {
      id,
      answered: false,
      forList: false,
    });
  };
  render() {
    console.log("props", this.props);
    const text = this.props.textQ.slice(
      0,
      Math.trunc(this.props.textQ.length / 2)
    );
    return (
      <form
        className="answers"
        onSubmit={(e) => this.handleViewPool(e, this.props.id)}
      >
        {text}
        ...
        <br />
        <button className="btn" type="submit">
          View Pool
        </button>
      </form>
    );
  }
}

export default withRouter(connect()(QuestionForList));
