import users from "../database";

const updateUserService = (isAdm, uuid, name, email) => {
  const userIndex = users.findIndex((user) => user.uuid === uuid);

  let updatedUser = { ...userIndex, name, email };

  if (isAdm) {
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    return users[userIndex];
  } else {
    if (userIndex.uuid === uuid) {
      users[userIndex] = { ...users[userIndex], ...updatedUser };
      return users[userIndex];
    }
  }
};

export default updateUserService;
