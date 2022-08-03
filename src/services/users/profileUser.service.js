import users from "../../database";

const userProfileService = (uuid) => {
  const currentUser = users.find((user) => user.uuid === uuid);

  const showUser = {
    uuid: currentUser.uuid,
    name: currentUser.name,
    email: currentUser.email,
    isAdm: currentUser.isAdm,
    createdOn: currentUser.createdOn,
    updatedOn: currentUser.updatedOn,
  };

  return showUser;
};

export default userProfileService;
