import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
import { saveUserQuestion, saveUserAnswer } from "./users";

export const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

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

    return saveQuestion({
      author: authedUser,
      optionOneText: textOptionOne,
      optionTwoText: textOptionTwo,
    })
      .then((question) => {
        dispatch(addQuestion(question));

        dispatch(saveUserQuestion(question));
      })
      .then(() => dispatch(hideLoading));
  };
}

export function getQuestions(questions) {
  return {
    type: GET_ALL_QUESTIONS,
    questions,
  };
}

export function saveAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleSaveAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading);

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    })
      .then(() => {
        dispatch(saveAnswer(authedUser, qid, answer));
        dispatch(saveUserAnswer(authedUser, qid, answer));
      })
      .then(() => dispatch(hideLoading));
  };
}
