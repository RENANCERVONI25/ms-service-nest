/* users.service.ts */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntitiy } from 'src/domain/entities/user.entity';

import { CreateUserParams } from 'src/domain/params/user.params';


import { Repository } from 'typeorm';
@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntitiy) private userRepository: Repository<UserEntitiy>,
    ) { }

    getUser() {
        return this.userRepository.find();
    }

    createUser(userDetails: CreateUserParams) {
        const newUser = this.userRepository.create({ ...userDetails, createdAt: new Date() });
        return this.userRepository.save(newUser);
    }
}