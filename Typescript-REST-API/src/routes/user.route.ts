import express from "express";
import { all_users } from "../controllers/user.controller";
export const user_route = express.Router();

// http://localhost:3000/api/users/alluser
user_route.get("/alluser", all_users);
