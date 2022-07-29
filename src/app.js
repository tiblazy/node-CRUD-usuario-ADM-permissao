const express = require("express");

import userRoutes from "./routers/users.routes";
import loginRoutes from "./routers/login.routes";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);

const route = 3000;
app.listen(route);

export default app;
