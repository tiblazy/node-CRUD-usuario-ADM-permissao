import createUserService from "../services/users/createUser.service";
import listUserService from "../services/users/listUser.service";
import profileUserService from "../services/users/profileUser.service";
import updateUserService from "../services/users/updateUser.service";
import deleteUserService from "../services/users/deleteUser.service";

const createUserController = async (request, response) => {
  const userData = request.body;
  const user = await createUserService(userData);

  return response.status(201).json(user);
};

const listUserController = (req, res) => {
  const users = listUserService();

  return res.status(200).json(users);
};

const profileUserController = async (req, res) => {
  const currentUser = await profileUserService(req.uuid);

  return res.status(200).json(currentUser);
};

const updateUserController = async (req, res) => {
  try {
    const isAdm = req.isAdm;
    const { uuid } = req.params;
    const userData = req.body;

    const updatedUser = await updateUserService(uuid, userData, isAdm);

    console.log(updatedUser);
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deleteUserController = (req, res) => {
  const { uuid } = req.params;

  const deletedUser = deleteUserService(uuid);

  return res.status(200).json({ message: "User deleted with success" });
};

export {
  createUserController,
  listUserController,
  profileUserController,
  updateUserController,
  deleteUserController,
};
