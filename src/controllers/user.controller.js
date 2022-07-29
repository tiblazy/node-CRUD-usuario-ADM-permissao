import createUserService from "../services/users/createUser.service";
import listUserService from "../services/users/listUser.service";
import userProfileService from "../services/users/userProfile.service";
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

const userProfileController = async (req, res) => {
  const currentUser = await userProfileService(req.uuid);

  return res.status(200).json(currentUser);
};

const updateUserController = async (req, res) => {
  const isAdm = await req.isAdm;

  try {
    const { uuid } = req.params;
    const { name, email } = req.body;
    const updatedUser = updateUserService(uuid, name, email, isAdm);

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
  userProfileController,
  updateUserController,
  deleteUserController,
};
