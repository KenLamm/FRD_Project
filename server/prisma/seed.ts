import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
const SALT_ROUNDS = 10;

async function hashPassword(plainPassword: string) {
  const hash: string = await bcrypt.hash(plainPassword, SALT_ROUNDS);
  return hash;
}

async function main() {
  const prisma = new PrismaClient();
  const insertUser = {
    username: 'sam',
    password: await hashPassword('1234'),
  };

  await prisma.user.upsert({
    where: { username: insertUser.username },
    update: {},
    create: { ...insertUser },
  });
}

main().then(() => console.log('seed done'));
