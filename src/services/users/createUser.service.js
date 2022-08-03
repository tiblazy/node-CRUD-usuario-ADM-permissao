import users from "../../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs/dist/bcrypt";

const createUserService = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const createdOn = new Date().toLocaleDateString();

  const { name, email, isAdm } = await userData;

  const newUser = {
    ...userData,
    uuid: uuidv4(),
    password: hashedPassword,
    createdOn,
    updatedOn: createdOn,
  };

  const showUser = {
    uuid: newUser.uuid,
    name,
    email,
    isAdm,
    createdOn: newUser.createdOn,
    updatedOn: newUser.updatedOn,
  };

  users.push(newUser);

  return showUser;
};

export default createUserService;
