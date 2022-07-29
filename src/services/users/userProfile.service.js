import users from "../../database";

const userProfileService = async (uuid) => {
  const currentUser = users.find((user) => user.uuid === uuid);
  delete currentUser.password;

  return await currentUser;
};

export default userProfileService;
