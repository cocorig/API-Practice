// db 연결
import { createConnection } from "typeorm";
import dotenv from "dotenv";

dotenv.config();
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;
export const db = createConnection({
  type: "mysql", // 사용할 데이터베이스 종류
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME, // 데이터베이스 사용자 이름
  password: DB_PASSWORD, // 데이터베이스 비밀번호
  database: DB_DATABASE, // 사용할 데이터베이스 이름
  entities: ["./src/entities/**/*.ts"], // TypeORM이 사용할 엔티티 목록
  synchronize: true, // 엔티티 스키마와 데이터베이스 스키마를 동기화할지 여부 (개발 환경에서는 true로 설정하는 것이 일반적, 프로덕션 환경에선 보안 및 데이터 무결성 문제로 false )
})
  .then((connection) => {
    console.log("Successful database connection!");
  })
  .catch((error) => {
    console.error("The connection to database was failed with error:", error);
  });
// entities란 TypeORM에서 데이터베이스와 매핑할 엔티티(Entity)의 배열이다.
// 엔티티는 데이터베이스 테이블을 나타내는 TypeScript 클래스이다.
// typeORM은 데이터베이스의 테이블과 해당 엔티티를 자동으로 매핑하여 데이터베이스와 상호 작용할 수 있도록 도와주는 도구이다.
//https://velog.io/@tilto0822/TypeORM-%EC%B2%98%EC%9D%8C-%EB%A7%8C%EB%82%98%EB%B3%B8-%ED%98%81%EC%8B%A0
