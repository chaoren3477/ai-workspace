import { Controller, Get, Param, Post, Body, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        const user = this.usersService.findOne(id);

        if (!user) {
            throw new NotFoundException('用户不存在');
        }

        return user
    }

    @Post()
    addUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.addUser(createUserDto);
    }
}
