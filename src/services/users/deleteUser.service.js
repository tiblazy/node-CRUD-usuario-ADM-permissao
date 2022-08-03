import users from "../../database";

const deleteUserService = async (uuid) => {
  const deleteUser = users.find(async (user) => user.uuid === (await uuid));

  if (deleteUser === -1) {
    return await "User not found";
  }

  if (deleteUser.isAdm || deleteUser.uuid === uuid) {
    return await users.splice(deleteUser, 1);
  }
};

export default deleteUserService;
