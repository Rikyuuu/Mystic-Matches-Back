import { IsEmail, IsString } from 'class-validator'

export class CreateUserDto {
    @IsString()
    readonly pseudo: string

    @IsEmail()
    readonly email: string

    @IsString()
    readonly password: string
}
