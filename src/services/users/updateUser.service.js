import users from "../../database";

const updateUserService = (uuid, userData) => {
  const userIndex = users.findIndex((user) => user.uuid === uuid);

  const updatedUser = {
    email: userData.email,
    name: userData.name,
    uuid,
  };
  updatedUser.updatedOn = new Date().toLocaleString();

  users[userIndex] = { ...users[userIndex], ...updatedUser };

  const { id, email, isAdm, updatedOn, createdOn, name } = users[userIndex];
  const dataUser = { id, email, isAdm, updatedOn, createdOn, name };

  return dataUser;
};

export default updateUserService;
