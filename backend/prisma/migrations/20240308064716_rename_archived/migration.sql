/*
  Warnings:

  - You are about to drop the column `archived` on the `Note` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Note` DROP COLUMN `archived`,
    ADD COLUMN `isArchived` BOOLEAN NOT NULL DEFAULT false;
