import express from "express";
import { all_users, create_users } from "../controllers/user.controller";
import { create_users_validation } from "../validations/user/create_user.validation";
export const user_route = express.Router();

// http://localhost:8080/api/users/alluser
user_route.get("/alluser", all_users);

// http://localhost:8080/api/users/create
user_route.post("/create", create_users_validation(), create_users);
