import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import databaseConfig from './orm.config'

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env.local', '.env.development'],
            isGlobal: true,
        }),
        TypeOrmModule.forRoot(databaseConfig()),
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
