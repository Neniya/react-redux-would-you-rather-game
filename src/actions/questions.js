export const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS";

export function getQuestions(questions) {
  return {
    type: GET_ALL_QUESTIONS,
    questions,
  };
}
