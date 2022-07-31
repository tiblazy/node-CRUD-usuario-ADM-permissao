import userLoginService from "../services/sessions/userLogin.service";

const sessionsLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userLogin = await userLoginService(email, password);

    return res.status(200).json({ token: userLogin.token });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default sessionsLoginController;
