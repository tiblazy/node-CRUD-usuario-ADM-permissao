import users from "../../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const userLoginService = ({ email, password }) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new Error("Wrong email/password");
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) {
    throw new Error("Wrong email/password");
  }

  const tokenContent = { email: user.email, isAdm: user.isAdm };

  const expires = {
    expiresIn: "24h",
    subject: user.uuid,
  };

  const token = jwt.sign(tokenContent, "SECRET_KEY", expires);

  return { token };
};

export default userLoginService;
