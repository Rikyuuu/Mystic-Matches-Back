import {
    IsBoolean,
    IsDate,
    IsEmail,
    IsOptional,
    IsString,
} from 'class-validator'

export class CreateUserDto {
    @IsString()
    readonly pseudo: string

    @IsEmail()
    readonly email: string

    @IsString()
    readonly password: string

    @IsString()
    readonly firstName: string

    @IsString()
    readonly lastName: string

    @IsDate()
    @IsOptional()
    readonly birthDate: Date

    @IsString()
    @IsOptional()
    readonly phoneNumber: string

    @IsString()
    @IsOptional()
    readonly avatarImg: string

    @IsBoolean()
    readonly isAdmin: boolean
}
