import { Request, Response } from "express";
import { s_create_user, s_all_user } from "../services/user.service";
import { validationResult } from "express-validator";
// get
export const all_users = async (req: Request, res: Response) => {
  const result = await s_all_user(req, res);
  res.json(result);
};
//post
export const create_users = async (req: Request, res: Response) => {
  const errors = validationResult(req); //유효성 검사 결과를 가져온 후,
  if (!errors.isEmpty()) {
    // 에러가 발생한 경우 400 상태 코드와 함께 해당 오류들을 JSON 형태로 응답한다.
    return res.status(400).json({
      error: true,
      errors: errors.array(),
      message: "there are some validation errors",
    });
  }
  //에러가 없을경우 사용자를 생성하고 결과를 JSON 형태로 반환한다.
  const result = await s_create_user(req, res);
  console.log("new users created!");
  res.json(result);
};
