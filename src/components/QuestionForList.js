import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class QuestionForList extends Component {
  static propTypes = {
    textQ: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };
  handleViewPool = (e, id) => {
    e.preventDefault();
    this.props.history.push(`/question/${id}`);
  };
  render() {
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
