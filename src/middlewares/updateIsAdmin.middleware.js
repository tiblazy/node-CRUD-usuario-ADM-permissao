import users from "../database";

const updateIsAdminMiddleware = (req, res, next) => {
  const currentUser = users.find((user) => user.uuid === req.uuid);

  req.isAdm = currentUser.isAdm;
  next();
};

export default updateIsAdminMiddleware;
