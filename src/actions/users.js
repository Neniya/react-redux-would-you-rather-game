export const GET_USERS = "GET_USERS";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}
