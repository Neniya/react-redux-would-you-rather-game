export function formatQuestion(question, author, authedUser) {
  const { id, optionOne, optionTwo, timestamp } = question;
  const { name, avatarURL } = author;

  return {
    name,
    id,
    timestamp,
    optionOne,
    optionTwo,
    avatar: avatarURL,
    answered:
      optionOne.votes.includes(authedUser) ||
      optionTwo.votes.includes(authedUser),
  };
}
