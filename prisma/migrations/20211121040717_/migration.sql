/*
  Warnings:

  - You are about to drop the column `quickRepliesId` on the `Reply` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[quickReplyId]` on the table `Reply` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Reply` DROP FOREIGN KEY `Reply_quickRepliesId_fkey`;

-- AlterTable
ALTER TABLE `Reply` DROP COLUMN `quickRepliesId`,
    ADD COLUMN `quickReplyId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Reply_quickReplyId_key` ON `Reply`(`quickReplyId`);

-- AddForeignKey
ALTER TABLE `Reply` ADD CONSTRAINT `Reply_quickReplyId_fkey` FOREIGN KEY (`quickReplyId`) REFERENCES `QuickReply`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
