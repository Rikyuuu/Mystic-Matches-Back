import { Body, Controller, Get, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './models/users.models'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAll() {
        return this.usersService.getAll()
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user)
    }
}
