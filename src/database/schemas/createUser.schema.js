import * as yup from "yup";

const createUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  isAdm: yup.bool().required(),
  password: yup.string().required(),
});

export default createUserSchema;
