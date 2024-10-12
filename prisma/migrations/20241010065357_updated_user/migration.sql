-- AlterTable
ALTER TABLE `users` ADD COLUMN `featuredImage` VARCHAR(191) NULL,
    ADD COLUMN `isArtisan` BOOLEAN NOT NULL DEFAULT false;
