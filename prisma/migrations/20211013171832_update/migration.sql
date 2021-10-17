-- AlterTable
ALTER TABLE `User` ADD COLUMN `username` VARCHAR(191),
    MODIFY `role` ENUM('USER', 'ADMIN') NOT NULL;
