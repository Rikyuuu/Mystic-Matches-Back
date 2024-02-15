import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './models/user.entity'
import { CreateUserDto } from './models/user.dto'

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    findAll(): Promise<User[]> {
        return this.userRepository.find()
    }

    async create(userDto: CreateUserDto): Promise<User> {
        return await this.userRepository.save(userDto)
    }
}
