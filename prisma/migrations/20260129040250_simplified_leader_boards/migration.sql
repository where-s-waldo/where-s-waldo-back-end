/*
  Warnings:

  - You are about to drop the column `leaderBoardId` on the `LeaderBoardEntry` table. All the data in the column will be lost.
  - You are about to drop the `LeaderBoard` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `mapId` to the `LeaderBoardEntry` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LeaderBoard" DROP CONSTRAINT "LeaderBoard_mapId_fkey";

-- DropForeignKey
ALTER TABLE "LeaderBoardEntry" DROP CONSTRAINT "LeaderBoardEntry_leaderBoardId_fkey";

-- AlterTable
ALTER TABLE "LeaderBoardEntry" DROP COLUMN "leaderBoardId",
ADD COLUMN     "mapId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "LeaderBoard";

-- AddForeignKey
ALTER TABLE "LeaderBoardEntry" ADD CONSTRAINT "LeaderBoardEntry_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
