import React, { Component, Fragment } from "react";
import "../App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
import AskLoginPage from "./AskLoginPage";

const PrivateRoute = ({ authedUser, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authedUser ? (
          <Component {...props} />
        ) : (
          <AskLoginPage
            path={rest.path === "" ? window.location.pathname : rest.path}
          />
        )
      }
    />
  );
};

class App extends Component {
  static propTypes = {
    authedUser: PropTypes.string,
  };

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          <div>
            <Nav />
            <div>
              <Switch>
                <Route path="/" exact>
                  <Login />
                </Route>
                <PrivateRoute
                  path="/dashboard"
                  authedUser={this.props.authedUser}
                  exact
                  component={Dashboard}
                />
                <PrivateRoute
                  path="/question/:id"
                  authedUser={this.props.authedUser}
                  component={QuestionPage}
                />
                <PrivateRoute
                  path="/add"
                  authedUser={this.props.authedUser}
                  component={NewQuestion}
                />
                <PrivateRoute
                  path="/leaderboard"
                  authedUser={this.props.authedUser}
                  component={LeaderBoard}
                />
                <PrivateRoute
                  path=""
                  authedUser={this.props.authedUser}
                  component={Error404}
                />
              </Switch>
            </div>
          </div>
        </Fragment>
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
