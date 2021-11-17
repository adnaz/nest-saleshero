/*
  Warnings:

  - You are about to drop the column `audio` on the `Reply` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Reply` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Reply` DROP FOREIGN KEY `Reply_userId_fkey`;

-- AlterTable
ALTER TABLE `Reply` DROP COLUMN `audio`,
    DROP COLUMN `userId`,
    ADD COLUMN `actorId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Reply` ADD CONSTRAINT `Reply_actorId_fkey` FOREIGN KEY (`actorId`) REFERENCES `Actor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
