import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

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
        dispatch(saveUserQuestion(question.author, question.id));
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

export function saveQuestionAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

// export function handleSaveAnswer(qid, answer){

// }
