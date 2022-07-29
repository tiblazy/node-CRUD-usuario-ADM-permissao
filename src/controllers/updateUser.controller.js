import users from "../database";
import updateUserService from "../services/updateUser.service";

const updateUserController = (req, res) => {
  const isAdm = req.isAdm;
  const { uuid } = req.params;
  const { name, email } = req.body;
  const updatedUser = updateUserService(isAdm, uuid, name, email);

  return res.status(200).json(updatedUser);
};

export default updateUserController;
