const express = require("express");

import userRoutes from "./routers/users.routes";
import sessionsRoutes from "./routers/sessions.routes";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionsRoutes);

const route = 3000;
app.listen(route);

export default app;
