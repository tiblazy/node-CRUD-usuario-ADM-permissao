import userLoginService from "../services/userLogin.service";

const userLoginController = (req, res) => {
  try {
    const { email, password } = req.body;

    const userLogin = userLoginService({ email, password });

    return res.json({ token: userLogin.token });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default userLoginController;
