import users from "../database";

const userProfileService = (uuid) => {
  const currentUser = users.find((user) => user.uuid === uuid);
  delete currentUser.password;

  return currentUser;
};

export default userProfileService;
