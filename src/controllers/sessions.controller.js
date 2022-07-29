import userLoginService from "../services/sessions/userLogin.service";

const sessionsLoginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userLogin = await userLoginService({ email, password });

    return res.json({ token: userLogin.token });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default sessionsLoginController;
