import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    findAll() {
        return [
            {
                id: '1',
                username: 'JohnDoe',
                email: '984387070@qq.com',
            },
            {
                id: '2',
                username: 'JaneDoe',
                email: 'jane.doe@example.com',
            },
        ]
    }

    findOne(id: string) {
        return {
            id,
            username: 'JohnDoe',
            email: '984387070@qq.com',
        };
    }

    addUser(user: { id: string; username: string; email?: string }) {
        return {
            id: user.id,
            username: user.username,
            email: user.email,
        };
    }
}
