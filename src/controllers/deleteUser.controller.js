import deleteUserService from "../services/deleteUser.service";

const updateUserController = (req, res) => {
  const { id } = req.params;

  const deletedUser = deleteUserService(id);

  return res.status(200).json({ message: "User deleted with success" });
};

export default updateUserController;
