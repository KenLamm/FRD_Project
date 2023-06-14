import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
<<<<<<< HEAD
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    create: any;
    async onModuleInit() {
        await this.$connect();
    }
    async enableShutdownHooks(app: INestApplication){
        this.$on('beforeExit', async() =>{
            await app.close();
        })
    }
=======
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
>>>>>>> d14cd6cc890b8f1baaa319cef752852d5e4be448
}
