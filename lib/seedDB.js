import prisma from "../prisma.config"

const waldoMaps = [
  { id: 1, src: map1, name: "test name", description: 'Find Waldo in the busy street scene.', characters: ["waldo", "wizard"] },
  { id: 2, src: map2, name: "test name", description: 'Find Waldo in the busy street scene.', characters: ["waldo", "wizard"] },
  { id: 3, src: map3, name: "test name", description: 'Find Waldo in the busy street scene.', characters: ["waldo", "wizard"] },
  { id: 4, src: map4, name: "test name", description: 'Find Waldo in the busy street scene.', characters: ["waldo", "wizard"] },
  { id: 5, src: map5, name: "test name", description: 'Find Waldo in the busy street scene.', characters: ["waldo", "wizard"] },
  { id: 6, src: map6, name: "test name", description: 'Find Waldo in the busy street scene.', characters: ["waldo", "wizard"] },
  { id: 7, src: map7, name: "test name", description: 'Find Waldo in the busy street scene.', characters: ["waldo", "wizard"] },
  { id: 8, src: map8, name: "test name", description: 'Find Waldo in the busy street scene.', characters: ["waldo", "wizard"] },
]

const seed = async () => {
  for (const map of waldoMaps) {
    await prisma.map.create({
      data: {
        id: map.id,
        name: map.name,
        description: map.description,
        src: map.src,
        characters: map.characters,
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