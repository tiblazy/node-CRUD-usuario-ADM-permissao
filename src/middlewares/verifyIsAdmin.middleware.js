import users from "../database";

const verifyIsAdmMiddleware = async (req, res, next) => {
  let adm = await req.uuid;
  const currentUser = users.find((user) => user.uuid === adm);

  if (!currentUser.isAdm) {
    return res.status(401).json({ message: "Missing admin permissions" });
  }

  next();
};

export default verifyIsAdmMiddleware;
