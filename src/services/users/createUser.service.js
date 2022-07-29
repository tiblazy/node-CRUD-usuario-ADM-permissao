import users from "../../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs/dist/bcrypt";

const createUserService = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const createdOn = new Date().toLocaleDateString();

  const newUser = {
    ...userData,
    uuid: uuidv4(),
    password: hashedPassword,
    createdOn,
    updatedOn: null,
  };

  const showUser = {
    ...newUser,
  };
  delete showUser.password;
  users.push(newUser);

  return showUser;
};

export default createUserService;
