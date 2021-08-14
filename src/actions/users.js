import { SAVE_QUESTION_ANSWER } from "./questions";
import { ADD_QUESTION } from "./questions";

export const GET_USERS = "GET_USERS";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}
