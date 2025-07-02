/* users.controller.ts */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { CreateUserDto } from 'src/domain/dto/create.user.dto';

import { UsersService } from 'src/services/user.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Get()
    getUsers() {
        return this.userService.getUser();
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    // @Put(':id')
    // async updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    //     await this.userService.updateUser(id, updateUserDto);
    // }

    // @Delete(':id')
    // async deleteUser(@Param('id', ParseIntPipe) id: number) {
    //     await this.userService.deleteUser(id);
    // }
}