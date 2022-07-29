import users from "../database";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs/dist/bcrypt";

const createUserService = async (email, name, password, isAdm = false) => {
  const createdOn = new Date().toLocaleDateString();
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    uuid: uuidv4(),
    email,
    name,
    isAdm,
    password: hashedPassword,
    createdOn,
    updatedOn: null,
  };

  const showUser = {
    uuid: uuidv4(),
    email,
    name,
    isAdm,
    createdOn,
    updatedOn: null,
  };
  users.push(newUser);

  return showUser;
};

export default createUserService;
