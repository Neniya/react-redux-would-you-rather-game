import React, { Component, Fragment } from "react";
import "../App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import Nav from "./Nav";
import LeaderBoard from "./LeaderBoard";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    console.log(this.props.authedUser);
    return (
      <BrowserRouter>
        {!this.props.authedUser ? (
          <div>
            <div>
              <Route path="/" exact component={Login} />
            </div>
          </div>
        ) : (
          <Fragment>
            <LoadingBar />
            <div>
              <Nav />
              <div>
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/question/:id" component={QuestionPage} />
                <Route path="/new" component={NewQuestion} />
                <Route path="/leaderboard" component={LeaderBoard} />
              </div>
            </div>
          </Fragment>
        )}
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    loading: users === {},
  };
}

export default connect(mapStateToProps)(App);
