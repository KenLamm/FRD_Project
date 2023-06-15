/*
  Warnings:

  - You are about to drop the column `createdAt` on the `photo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `photo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `project` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `record` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `record` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `syslog` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `isFinished` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `isAdmin` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `teammate` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updated_at` to the `photo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "teammate" DROP CONSTRAINT "teammate_project_id_fkey";

-- DropForeignKey
ALTER TABLE "teammate" DROP CONSTRAINT "teammate_user_id_fkey";

-- AlterTable
ALTER TABLE "photo" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "project" DROP COLUMN "updatedAt",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "record" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "syslog" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "task" DROP COLUMN "createdAt",
DROP COLUMN "isFinished",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_finished" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createdAt",
DROP COLUMN "isAdmin",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_admin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "teammate";

-- CreateTable
CREATE TABLE "user_project" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "role" TEXT NOT NULL,
    "is_valid" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_project" ADD CONSTRAINT "user_project_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_project" ADD CONSTRAINT "user_project_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
