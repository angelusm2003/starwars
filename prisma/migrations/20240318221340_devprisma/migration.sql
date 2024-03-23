/*
  Warnings:

  - You are about to drop the `AModelExample` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SecondModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Film" ADD COLUMN "episodeID" INTEGER;
ALTER TABLE "Film" ADD COLUMN "producer" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AModelExample";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SecondModel";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Character" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "height" TEXT,
    "mass" TEXT,
    "hairColor" TEXT,
    "skinColor" TEXT,
    "eyeColor" TEXT,
    "birthYear" TEXT,
    "gender" TEXT,
    "homeworldId" INTEGER,
    CONSTRAINT "Character_homeworldId_fkey" FOREIGN KEY ("homeworldId") REFERENCES "Planet" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Planet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "diameter" TEXT,
    "rotationPeriod" TEXT,
    "orbitalPeriod" TEXT,
    "gravity" TEXT,
    "population" TEXT,
    "climate" TEXT,
    "terrain" TEXT,
    "surfaceWater" TEXT
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "model" TEXT,
    "manufacturer" TEXT,
    "costInCredits" TEXT,
    "length" TEXT,
    "maxAtmospheringSpeed" TEXT,
    "crew" TEXT,
    "passengers" TEXT,
    "cargoCapacity" TEXT,
    "consumables" TEXT,
    "vehicleClass" TEXT
);

-- CreateTable
CREATE TABLE "Starship" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "model" TEXT,
    "manufacturer" TEXT,
    "costInCredits" TEXT,
    "length" TEXT,
    "maxAtmospheringSpeed" TEXT,
    "crew" TEXT,
    "passengers" TEXT,
    "cargoCapacity" TEXT,
    "consumables" TEXT,
    "hyperdriveRating" TEXT,
    "MGLT" TEXT,
    "starshipClass" TEXT
);

-- CreateTable
CREATE TABLE "Species" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "classification" TEXT,
    "designation" TEXT,
    "averageHeight" TEXT,
    "averageLifespan" TEXT,
    "eyeColors" TEXT,
    "hairColors" TEXT,
    "skinColors" TEXT,
    "language" TEXT,
    "homeworldId" INTEGER,
    CONSTRAINT "Species_homeworldId_fkey" FOREIGN KEY ("homeworldId") REFERENCES "Planet" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PlanetFilms" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PlanetFilms_A_fkey" FOREIGN KEY ("A") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PlanetFilms_B_fkey" FOREIGN KEY ("B") REFERENCES "Planet" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_StarshipFilms" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_StarshipFilms_A_fkey" FOREIGN KEY ("A") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_StarshipFilms_B_fkey" FOREIGN KEY ("B") REFERENCES "Starship" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_VehicleFilms" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_VehicleFilms_A_fkey" FOREIGN KEY ("A") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_VehicleFilms_B_fkey" FOREIGN KEY ("B") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_SpeciesFilms" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_SpeciesFilms_A_fkey" FOREIGN KEY ("A") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_SpeciesFilms_B_fkey" FOREIGN KEY ("B") REFERENCES "Species" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CharacterFilms" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CharacterFilms_A_fkey" FOREIGN KEY ("A") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CharacterFilms_B_fkey" FOREIGN KEY ("B") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_SpeciesPeople" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_SpeciesPeople_A_fkey" FOREIGN KEY ("A") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_SpeciesPeople_B_fkey" FOREIGN KEY ("B") REFERENCES "Species" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_StarshipPilots" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_StarshipPilots_A_fkey" FOREIGN KEY ("A") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_StarshipPilots_B_fkey" FOREIGN KEY ("B") REFERENCES "Starship" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_VehiclePilots" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_VehiclePilots_A_fkey" FOREIGN KEY ("A") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_VehiclePilots_B_fkey" FOREIGN KEY ("B") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_PlanetFilms_AB_unique" ON "_PlanetFilms"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanetFilms_B_index" ON "_PlanetFilms"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_StarshipFilms_AB_unique" ON "_StarshipFilms"("A", "B");

-- CreateIndex
CREATE INDEX "_StarshipFilms_B_index" ON "_StarshipFilms"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_VehicleFilms_AB_unique" ON "_VehicleFilms"("A", "B");

-- CreateIndex
CREATE INDEX "_VehicleFilms_B_index" ON "_VehicleFilms"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SpeciesFilms_AB_unique" ON "_SpeciesFilms"("A", "B");

-- CreateIndex
CREATE INDEX "_SpeciesFilms_B_index" ON "_SpeciesFilms"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterFilms_AB_unique" ON "_CharacterFilms"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterFilms_B_index" ON "_CharacterFilms"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SpeciesPeople_AB_unique" ON "_SpeciesPeople"("A", "B");

-- CreateIndex
CREATE INDEX "_SpeciesPeople_B_index" ON "_SpeciesPeople"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_StarshipPilots_AB_unique" ON "_StarshipPilots"("A", "B");

-- CreateIndex
CREATE INDEX "_StarshipPilots_B_index" ON "_StarshipPilots"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_VehiclePilots_AB_unique" ON "_VehiclePilots"("A", "B");

-- CreateIndex
CREATE INDEX "_VehiclePilots_B_index" ON "_VehiclePilots"("B");
