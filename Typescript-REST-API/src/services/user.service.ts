import { Request, Response } from "express";
import { User } from "../entities/user.entity";
// 데이터 생성 프로세스
export const s_create_user = async (req: Request, res: Response) => {
  const { name, phone, age, email } = req.body;
  const newUser = User.save({
    name: name,
    phone: phone,
    age: age,
    email: email,
  });

  return newUser;
};
// 사용자가 작성한 값을 반환한다.
