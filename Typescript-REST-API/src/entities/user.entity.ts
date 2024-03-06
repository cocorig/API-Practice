import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("user") //이 클래스가 데이터베이스의 user 테이블과 매핑되어야 함
export class User extends BaseEntity {
  @PrimaryGeneratedColumn() //기본 키
  id!: number;

  @Column()
  name!: string;

  @Column()
  phone!: number;

  @Column()
  email!: string;
  @Column()
  age!: number;
}
