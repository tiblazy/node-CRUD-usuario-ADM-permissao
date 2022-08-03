import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  if (token.includes("Bearer")) {
    token = token.split(" ")[1];
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      // console.log(error);
      return res.status(401).json({ message: "Invalid Token" });
    }

    req.email = decoded.email;
    req.isAdm = decoded.isAdm;
    req.uuid = decoded.sub;

    next();
  });
};

export default verifyAuthTokenMiddleware;
