import listUserService from "../services/listUser.service";

const listUserController = (req, res) => {
  const users = listUserService();

  return res.status(200).json(users);
};

export default listUserController;
