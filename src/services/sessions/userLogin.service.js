import users from "../../database";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";

const userLoginService = async (email, password) => {
  const currentUser = users.find((user) => user.email === email);

  if (!currentUser) {
    throw new Error("Wrong email/password");
  }

  const passwordMatch = await compare(password, currentUser.password);
  if (!passwordMatch) {
    throw new Error("Wrong email/password");
  }

  const tokenContent = { email: currentUser.email, isAdm: currentUser.isAdm };
  const expires = {
    expiresIn: "24h",
    subject: currentUser.uuid,
  };

  const token = jwt.sign(tokenContent, "SECRET_KEY", expires);

  return { token };
};

export default userLoginService;
