import express from "express";
import { user_route } from "./routes/user.route";
const app = express();

app.use("/api/users", user_route);
app.listen(3000, () => {
  console.log("listening on port 3000");
});
