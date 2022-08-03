import users from "../../database";

const updateUserService = (uuid, userData) => {
  const userIndex = users.findIndex((user) => user.uuid === uuid);

  if (userIndex === -1) {
    return "User not found";
  }

  const updatedUser = {
    email: userData.email,
    name: userData.name,
    uuid,
  };
  updatedUser.updatedOn = new Date().toLocaleString();

  users[userIndex] = { ...users[userIndex], ...updatedUser };

  const { email, isAdm, updatedOn, createdOn, name } = users[userIndex];
  const dataUser = { uuid, email, isAdm, updatedOn, createdOn, name };

  console.log(dataUser); //usuário
  return dataUser;
};

export default updateUserService;
