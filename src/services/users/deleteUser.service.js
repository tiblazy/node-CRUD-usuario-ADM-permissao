import users from "../../database";

const deleteUserService = (uuid) => {
  const deleteUser = users.find((user) => user.uuid === uuid);

  if (deleteUser === -1) {
    return "User not found";
  }

  if (deleteUser.isAdm) {
    return users.splice(deleteUser, 1);
  } else {
    if (deleteUser.uuid === uuid) {
      return users.splice(deleteUser, 1);
    }
  }
};

export default deleteUserService;
