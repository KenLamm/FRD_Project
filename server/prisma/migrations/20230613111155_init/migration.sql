/*
  Warnings:

  - You are about to drop the column `project_id` on the `task` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "task" DROP CONSTRAINT "task_project_id_fkey";

-- DropIndex
DROP INDEX "photo_name_key";

-- DropIndex
DROP INDEX "users_password_key";

-- AlterTable
ALTER TABLE "task" DROP COLUMN "project_id";
