import { check } from "express-validator";

export const create_users_validation = () => {
  return [
    check("name")
      .notEmpty()
      .withMessage("name is required")
      .isLength({ min: 3, max: 10 })
      .withMessage("name should between 5 and 10 characters"),
    check("email").isEmail().withMessage("this is not a valid email format."),
    check("age").isNumeric().withMessage("age should be a number."),
  ];
};

//express-validation :사용자 입력 데이터의 유효성을 검사하기 위한 미들웨어
// 여러 개의 유효성 검사를 하나의 미들웨어 함수로 정의하기 위해서는 배열을 사용
/** express-validator 내장 함수
notEmpty()
isEmail()
isLength()
matches
isNumeric() -> 숫자인 문자열도 통과, 숫자로 인식 ex) "12" 통과 , "12xx" 오류
** 에러 메시지를 표현하기 위한 함수
withMessage()
*/
