import express from "express";
import { user_route } from "./routes/user.route";
import { db } from "./data/database";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

db.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
  });
});

app.use("/api/users", user_route);
