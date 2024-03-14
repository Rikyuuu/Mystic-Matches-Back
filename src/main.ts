import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import helmet from 'helmet'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.use(helmet())

    // Starts listening for shutdown hooks
    // (removal of the beforeExit from prisma service) : https://github.com/prisma/prisma/releases/tag/5.0.0)
    app.enableShutdownHooks()

    await app.listen(process.env.PORT || 3001)
    console.log(`Application is running on: ${process.env.PORT}`)
}
bootstrap()
