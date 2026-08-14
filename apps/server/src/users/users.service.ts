import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            id: '1',
            username: 'JohnDoe'
        },
        {
            id: '2',
            username: 'JaneDoe'
        },
    ]
    findAll() {
        return this.users;
    }

    findOne(id: string) {
        return this.users.find(user => user.id === id)
    }

    addUser(createUserDto: CreateUserDto) {
        const user = {
            id: String(this.users.length-1),
            username: createUserDto.username,
        }

        this.users.push(user)

        return user;
    }
}
