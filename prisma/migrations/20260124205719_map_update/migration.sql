/*
  Warnings:

  - Added the required column `description` to the `Map` table without a default value. This is not possible if the table is not empty.
  - Added the required column `src` to the `Map` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Map" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "src" TEXT NOT NULL;
