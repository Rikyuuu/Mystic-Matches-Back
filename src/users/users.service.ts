import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './models/users.models'

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    getAll() {
        return this.prisma.user.findMany({})
    }

    createUser(user: CreateUserDto) {
        return this.prisma.user.create({
            data: user,
        })
    }
}
