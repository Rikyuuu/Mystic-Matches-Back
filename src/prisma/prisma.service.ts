// src/prisma/prisma.service.ts
import { Injectable, Logger, OnModuleInit } from '@nestjs/common'
import { Prisma, PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService
    extends PrismaClient<
        Prisma.PrismaClientOptions,
        'query' | 'info' | 'warn' | 'error'
    >
    implements OnModuleInit
{
    constructor(private readonly logger: Logger) {
        super({
            log: [
                { emit: 'event', level: 'query' },
                { emit: 'stdout', level: 'info' },
                { emit: 'stdout', level: 'warn' },
                { emit: 'stdout', level: 'error' },
            ],
            errorFormat: 'colorless',
        })
    }
    async onModuleInit() {
        if (process.env.LOG_PRISMA === 'false') {
            await this.$connect()
            return
        }
        this.$on('query', (e) => {
            this.logger.log('query on prisma', e)
        })
        this.$on('info', (e) => {
            this.logger.log('info on prisma', e)
        })
        this.$on('warn', (e) => {
            this.logger.warn('warn on prisma', e)
        })
        this.$on('error', (e) => {
            this.logger.error('error on prisma', e)
        })

        await this.$connect()
    }

    // removal of the beforeExit from here : https://github.com/prisma/prisma/releases/tag/5.0.0)
}
