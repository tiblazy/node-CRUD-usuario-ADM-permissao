import users from "../database";

const authUpdateMiddleware = (request, response, next) => {
  const { uuid } = request.params;
  const user = users.find((user) => user.email === request.email);

  if (user) {
    if (user.isAdm || user.uuid === uuid) {
      next();
    }
  } else {
    return response.status(401).json({
      message: "Unauthorized",
    });
  }
};

export default authUpdateMiddleware;
