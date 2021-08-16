import React, { Component } from "react";

class Error404 extends Component {
  render() {
    return (
      <dir className="error, center-box">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/08/17/32/not-found-2384304_1280.jpg"
          alt="page not found!"
          width="300"
        />
      </dir>
    );
  }
}

export default Error404;
