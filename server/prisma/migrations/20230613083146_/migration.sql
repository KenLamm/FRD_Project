/*
  Warnings:

  - You are about to drop the column `photo_name` on the `photo` table. All the data in the column will be lost.
  - You are about to drop the column `project_id` on the `task` table. All the data in the column will be lost.
  - Added the required column `name` to the `task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "task" DROP CONSTRAINT "task_project_id_fkey";

-- DropIndex
DROP INDEX "photo_photo_name_key";

-- AlterTable
ALTER TABLE "photo" DROP COLUMN "photo_name",
ADD COLUMN     "name" TEXT;

-- AlterTable
ALTER TABLE "task" DROP COLUMN "project_id",
ADD COLUMN     "name" TEXT NOT NULL;
