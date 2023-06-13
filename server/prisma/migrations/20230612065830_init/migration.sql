/*
  Warnings:

  - You are about to drop the column `title` on the `record` table. All the data in the column will be lost.
  - You are about to drop the column `providing_user_id` on the `syslog` table. All the data in the column will be lost.
  - You are about to drop the column `receiving_folder_id` on the `syslog` table. All the data in the column will be lost.
  - You are about to drop the column `receiving_photo_id` on the `syslog` table. All the data in the column will be lost.
  - You are about to drop the column `receiving_record_id` on the `syslog` table. All the data in the column will be lost.
  - You are about to drop the column `receiving_user_id` on the `syslog` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `record` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo_id` to the `syslog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `record_id` to the `syslog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_id` to the `syslog` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "record_title_key";

-- DropIndex
DROP INDEX "syslog_providing_user_id_key";

-- AlterTable
ALTER TABLE "photo" ALTER COLUMN "photo_name" DROP NOT NULL,
ALTER COLUMN "s3_name" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "record" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "syslog" DROP COLUMN "providing_user_id",
DROP COLUMN "receiving_folder_id",
DROP COLUMN "receiving_photo_id",
DROP COLUMN "receiving_record_id",
DROP COLUMN "receiving_user_id",
ADD COLUMN     "photo_id" INTEGER NOT NULL,
ADD COLUMN     "record_id" INTEGER NOT NULL,
ADD COLUMN     "task_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "task" ALTER COLUMN "isFinished" SET DEFAULT false;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "isAdmin" SET DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "record_name_key" ON "record"("name");

-- AddForeignKey
ALTER TABLE "syslog" ADD CONSTRAINT "syslog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "syslog" ADD CONSTRAINT "syslog_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "syslog" ADD CONSTRAINT "syslog_record_id_fkey" FOREIGN KEY ("record_id") REFERENCES "record"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "syslog" ADD CONSTRAINT "syslog_photo_id_fkey" FOREIGN KEY ("photo_id") REFERENCES "photo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
