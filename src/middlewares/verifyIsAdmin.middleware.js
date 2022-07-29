import users from "../database";

const verifyIsAdmMiddleware = async (req, res, next) => {
  let adm = await req.email;
  const currentUser = users.find((user) => user.email === adm);

  if (!currentUser.isAdm) {
    return res.status(401).json({ message: "Missing admin permissions" });
  }

  next();
};

export default verifyIsAdmMiddleware;
