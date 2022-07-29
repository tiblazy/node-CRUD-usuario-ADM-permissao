import users from "../database";

const deleteUserService = (id) => {
  const currentUser = users.find((user) => user.uuid === id);

  if (currentUser === -1) {
    return "User not found";
  }

  users.splice(currentUser, 1);
};

export default deleteUserService;
