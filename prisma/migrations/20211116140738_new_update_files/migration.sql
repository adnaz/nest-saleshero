/*
  Warnings:

  - You are about to drop the column `avatar` on the `Actor` table. All the data in the column will be lost.
  - You are about to drop the column `audio` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `Reply` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Section` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[fileId]` on the table `Actor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[audioId]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imageId]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[fileId]` on the table `Reply` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[quickRepliesId]` on the table `Reply` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imageId]` on the table `Section` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Actor` DROP COLUMN `avatar`,
    ADD COLUMN `fileId` INTEGER;

-- AlterTable
ALTER TABLE `Course` DROP COLUMN `audio`,
    DROP COLUMN `image`,
    ADD COLUMN `audioId` INTEGER,
    ADD COLUMN `imageId` INTEGER;

-- AlterTable
ALTER TABLE `QuickReply` ADD COLUMN `keepIt` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Reply` DROP COLUMN `text`,
    ADD COLUMN `fileId` INTEGER,
    ADD COLUMN `quickRepliesId` INTEGER;

-- AlterTable
ALTER TABLE `Section` DROP COLUMN `image`,
    ADD COLUMN `imageId` INTEGER;

-- CreateTable
CREATE TABLE `File` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `link` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `type` ENUM('AUDIO', 'IMAGE', 'VIDEO') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Actor_fileId_key` ON `Actor`(`fileId`);

-- CreateIndex
CREATE UNIQUE INDEX `Course_audioId_key` ON `Course`(`audioId`);

-- CreateIndex
CREATE UNIQUE INDEX `Course_imageId_key` ON `Course`(`imageId`);

-- CreateIndex
CREATE UNIQUE INDEX `Reply_fileId_key` ON `Reply`(`fileId`);

-- CreateIndex
CREATE UNIQUE INDEX `Reply_quickRepliesId_key` ON `Reply`(`quickRepliesId`);

-- CreateIndex
CREATE UNIQUE INDEX `Section_imageId_key` ON `Section`(`imageId`);

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_audioId_fkey` FOREIGN KEY (`audioId`) REFERENCES `File`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `File`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Section` ADD CONSTRAINT `Section_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `File`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reply` ADD CONSTRAINT `Reply_fileId_fkey` FOREIGN KEY (`fileId`) REFERENCES `File`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reply` ADD CONSTRAINT `Reply_quickRepliesId_fkey` FOREIGN KEY (`quickRepliesId`) REFERENCES `QuickReply`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Actor` ADD CONSTRAINT `Actor_fileId_fkey` FOREIGN KEY (`fileId`) REFERENCES `File`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
