import { getInitialData } from "../utils/api";
import { getUsers } from "./users";
import { getQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
