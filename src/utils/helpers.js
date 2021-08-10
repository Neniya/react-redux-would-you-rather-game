export function formatQuestion(question, author) {
  const { id, optionOne, optionTwo, timestamp } = question;
  const { name, avatarURL } = author;

  return {
    name,
    id,
    timestamp,
    optionOne,
    optionTwo,
    avatar: avatarURL,
  };
}
