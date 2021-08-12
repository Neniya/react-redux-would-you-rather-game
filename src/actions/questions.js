import { saveQuestion } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(textOptionOne, textOptionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading);

    console.log("action:", textOptionOne, textOptionTwo, authedUser);

    return saveQuestion({
      author: authedUser,
      optionOneText: textOptionOne,
      optionTwoText: textOptionTwo,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading));
  };
}

export function getQuestions(questions) {
  return {
    type: GET_ALL_QUESTIONS,
    questions,
  };
}
