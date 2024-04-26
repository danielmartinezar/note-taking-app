/*
  Warnings:

  - You are about to drop the column `createAt` on the `Note` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Note` DROP COLUMN `createAt`,
    ADD COLUMN `archived` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
