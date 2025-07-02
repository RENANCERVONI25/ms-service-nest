
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("users")
export class UserEntitiy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  createdAt: Date;

  @Column()
  authStrategy: string = "";  
}