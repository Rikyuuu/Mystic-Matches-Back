import { Body, Controller, Get, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './models/user.dto'
import { User } from './models/user.entity'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll()
    }

    @Post()
    create(@Body() user: CreateUserDto): Promise<User> {
        return this.usersService.create(user)
    }
}
