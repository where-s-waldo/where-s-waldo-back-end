import { prisma } from "./prisma.js"

const waldoMaps = [
  {
    src: "map1",
    name: "The Gobbling Gluttons",
    description: "Find Waldo in the midst of all the gluttons!",
    characters: [
      { name: "Waldo", src: "waldo", x: 57, y: 36.3 },//
      { name: "Wenda", src: "wenda", x: 39, y: 33.23 },//
      { name: "Wizard Whitebeard", src: "wizardWhitebeard", x: 84.97, y: 86 },//
      { name: "Odlaw", src: "odlaw", x: 40.42, y: 61.23 },//
    ],
  },
  {
    src: "map2",
    name: "Sightseeing",
    description: "See many sights with Waldo!",
    characters: [
      { name: "Waldo", src: "waldo", x: 42.18, y: 19.39 },//
      { name: "Wenda", src: "wenda", x: 29.99, y: 74.75 },//
      { name: "Wizard Whitebeard", src: "wizardWhitebeard", x: 68.99, y: 5.17 },//
      { name: "Odlaw", src: "odlaw", x: 19.91, y: 73.68 },//
    ],
  },
  {
    src: "map3",
    name: "Raid",
    description: "Find Waldo in Troy!",
    characters: [
      { name: "Waldo", src: "waldo", x: 16.86, y: 84.74 },//
      { name: "Wenda", src: "wenda", x: 75.76, y: 76.36 },//
      { name: "Wizard Whitebeard", src: "wizardWhitebeard", x: 28.98, y: 13.56 },//
      { name: "Odlaw", src: "odlaw", x: 86.46, y: 82.28 },//
    ],
  },
  {
    src: "map4",
    name: "The Maze",
    description: "Find Waldo in the maze!",
    characters: [
      { name: "Waldo", src: "waldo", x: 56, y: 44.3 }, //
      { name: "Wenda", src: "wenda", x: 75, y: 53.9 }, // 
      { name: "Wizard Whitebeard", src: "wizardWhitebeard", x: 66.55, y: 31.98 },//
      { name: "Odlaw", src: "odlaw", x: 43.74, y: 33.22 },//
    ],
  },
  {
    src: "map5",
    name: "The Grassland",
    description: "Find Waldo in the grassland!",
    characters: [
      { name: "Waldo", src: "waldo", x: 93.97, y: 6.94 },//
      { name: "Wenda", src: "wenda", x: 27.76, y: 64.81 },//
      { name: "Wizard Whitebeard", src: "wizardWhitebeard", x: 29.09, y: 41.35 },//
      { name: "Odlaw", src: "odlaw", x: 89.98, y: 57.65 },//
    ],
  },
  {
    src: "map6",
    name: "First adventure",
    description: "Find Waldo as he sets off on his journey!",
    characters: [
      { name: "Waldo", src: "waldo", x: 43.26, y: 76.09 },//
      { name: "Wenda", src: "wenda", x: 43.67, y: 61.39 },//
      { name: "Wizard Whitebeard", src: "wizardWhitebeard", x: 65.74, y: 78.49 },//
      { name: "Odlaw", src: "odlaw", x: 59.11, y: 95.92 },//
    ],
  },
  {
    src: "map7",
    name: "The Big Blue Sea",
    description: "Find Waldo on the ocean!",
    characters: [
      { name: "Waldo", src: "waldo", x: 47.73, y: 23.6 },//
      { name: "Wenda", src: "wenda", x: 22.61, y: 34.33 },//
      { name: "Wizard Whitebeard", src: "wizardWhitebeard", x: 69.47, y: 18.48 },//
    ],
  },
]


const seed = async () => {
  for (let i = 0; i < waldoMaps.length; i++) {

    const map = waldoMaps[i]

    await prisma.map.create({
      data: {
        name: map.name,
        description: map.description,
        src: map.src,
        characters: {
          create: map.characters,
        },
      },
    })
  }
}

seed()
  .then(() => {
    console.log("🌱 Seeding complete")
    prisma.$disconnect()
  })
  .catch((err) => {
    console.error(err)
    prisma.$disconnect()
    process.exit(1)
  })