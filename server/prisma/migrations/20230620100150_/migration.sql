/*
  Warnings:

  - You are about to drop the column `is_valid` on the `user_project` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `user_project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_project" DROP COLUMN "is_valid",
DROP COLUMN "role";
