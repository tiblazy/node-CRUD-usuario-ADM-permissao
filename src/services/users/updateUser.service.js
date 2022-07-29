import users from "../../database";

const updateUserService = async (uuid, userData, isAdm) => {
  const userIndex = users.findIndex((user) => user.uuid === uuid);

  let updatedUser = {
    ...users[userIndex],
    ...userData,
    uuid,
    isAdm,
  };
  updatedUser.updatedOn = new Date().toLocaleString();

  if (isAdm) {
    users[userIndex] = updatedUser;
    const showUser = users[userIndex];
    delete showUser.password;

    return users[userIndex];
  } else {
    if (userIndex.uuid === uuid) {
      users[userIndex] = updatedUser;
      const showUser = users[userIndex];
      delete showUser.password;

      return users[userIndex];
    }
  }
};

export default updateUserService;
