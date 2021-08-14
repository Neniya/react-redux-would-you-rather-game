export const GET_USERS = "GET_USERS";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function saveUserAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_USER_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function saveUserQuestion(question) {
  return {
    type: ADD_USER_QUESTION,
    author: question.author,
    id: question.id,
  };
}
