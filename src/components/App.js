import React, { Component, Fragment } from "react";
import "../App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import Nav from "./Nav";
import LeaderBoard from "./LeaderBoard";
import LoadingBar from "react-redux-loading";
import PropTypes from "prop-types";
import Error404 from "./Error404";
import WrongPage from "./WrongPage";

class App extends Component {
  static propTypes = {
    authedUser: PropTypes.string,
  };
  state = {
    path: "",
  };
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  clikcLogIn = (e) => {
    e.preventDefault();

    this.setState(() => ({
      path: window.location.pathname,
    }));
    console.log("done");
  };
  clearPath = () => {
    this.setState(() => ({
      path: "",
    }));
  };
  render() {
    console.log(window.location.pathname);
    console.log(window.location);
    return (
      <BrowserRouter>
        {!this.props.authedUser ? (
          <div>
            <div>
              <Route path="/" exact>
                <Login path={this.state.path} clearPath={this.clearPath} />
              </Route>
            </div>
            {window.location.pathname !== "/" && this.state.path === "" ? (
              <div>
                <WrongPage clikcLogIn={this.clikcLogIn} />
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <Fragment>
            <LoadingBar />
            <div>
              <Nav />
              <div>
                <Switch>
                  <Route path="/dashboard" exact component={Dashboard} />
                  <Route path="/question/:id" component={QuestionPage} />
                  <Route path="/add" component={NewQuestion} />
                  <Route path="/leaderboard" component={LeaderBoard} />
                  <Route path="" component={Error404} />
                </Switch>
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
