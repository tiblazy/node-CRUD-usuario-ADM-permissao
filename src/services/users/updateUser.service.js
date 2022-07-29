import users from "../../database";

const updateUserService = ({ uuid, name, email, isAdm }) => {
  const userIndex = users.findIndex((user) => user.uuid === uuid);

  const updatedUser = { ...userIndex, name, email };
  updatedUser.updatedOn = new Date().toLocaleString();

  if (isAdm) {
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    delete updatedUser.password;

    return users[userIndex];
  } else {
    if (userIndex.uuid === uuid) {
      users[userIndex] = { ...users[userIndex], ...updatedUser };
      delete updatedUser.password;

      return users[userIndex];
    }
  }
};

export default updateUserService;
