import { prisma } from "../lib/prisma.js";

const getAllMaps = async (req, res) => {
  try {
    const maps = await prisma.map.findMany()

    return res.status(200).json({ maps })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error })
  }
}

const getSingleMap = async (req, res) => {
  const { mapId } = req.params

  try {
    const map = await prisma.map.findUnique({
      where: {
        id: Number(mapId)
      },
      include: {
        characters: true
      }
    })

    return res.status(200).json({ map })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error })
  }
}

const checkCoordinates = async (req, res) => {
  const { mapId } = req.params
  const { char, x, y } = req.query

  try {
    const character = await prisma.character.findFirst({
      where: {
        mapId: Number(mapId),
        name: char
      }
    })

    if (Math.abs(x - character.x) <= 2 && Math.abs(y - character.y) <= 3) {
      return res.status(200).json({ success: true, name: char })
    }

    return res.status(200).json({ success: false, name: char })

  } catch (error) {
    console.log(error)
    return res.status(500).json({ error })
  }
}

export {
  getAllMaps,
  getSingleMap,
  checkCoordinates
}
