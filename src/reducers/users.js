import { GET_USERS } from "../actions/users";
import { SAVE_USER_ANSWER } from "../actions/users";
import { ADD_USER_QUESTION } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_USER_ANSWER:
      const { authedUser, qid, answer } = action;
      console.log("user", authedUser, qid, answer);
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    case ADD_USER_QUESTION:
      const { author, id } = action;
      console.log("data", action);
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id]),
        },
      };
    default:
      return state;
  }
}
