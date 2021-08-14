import { SAVE_QUESTION_ANSWER } from "./questions";
import { ADD_QUESTION } from "./questions";

export const GET_USERS = "GET_USERS";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function saveUserAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function saveUserQuestion(authedUser, id) {
  return {
    type: ADD_QUESTION,
    authedUser,
    id,
  };
}
