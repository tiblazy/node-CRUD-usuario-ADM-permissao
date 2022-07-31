import users from "../database";

const verifyIsAdmMiddleware = (req, res, next) => {
  const currentUser = users.find((user) => user.uuid === req.uuid);

  if (!currentUser.isAdm) {
    return res.status(401).json({ message: "Missing admin permissions" });
  }

  next();
};

export default verifyIsAdmMiddleware;
