/* users.module.ts */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from 'src/controllers/user.controller';
import { UserEntitiy } from 'src/domain/entities/user.entity';

import { UsersService } from 'src/services/user.service';


@Module({
  imports: [TypeOrmModule.forFeature([UserEntitiy])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }