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

const activeGames = new Map();
const startMapTimer = async (req, res) => {
  try {
    const key = `${req.ip}:${req.params.mapId}`;

    activeGames.set(key, Date.now());

    res.json({ startTime: activeGames.get(key) });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error })
  }
};

const finishMapTimer = async (req, res) => {
  try {
    const key = `${req.ip}:${req.params.mapId}`;
    const startTime = activeGames.get(key);

    if (!startTime) {
      return res.status(400).json({ error: 'Game not started' });
    }

    const endTime = Date.now() - startTime;
    activeGames.delete(key);

    res.json({ endTime });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error })
  }
}

const postTimeToLeaderBoard = async (req, res) => {
  const { username, time } = req.body
  const { mapId } = req.params

  try {
    await prisma.leaderBoardEntry.create({
      data: {
        name: username,
        time,
        mapId: Number(mapId)
      }
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error })
  }
}

const getLeaderboard = async (req, res) => {
  const { mapId } = req.params
  const { skip } = req.query

  try {
    const leaderboardChars = await prisma.leaderBoardEntry.findMany({
      where: { mapId: Number(mapId) },
      orderBy: { time: 'asc' },
      take: 10,
      skip: Number(skip)
    })

    const totalLeaderBoardChars = await prisma.leaderBoardEntry.count({
      where: { mapId: Number(mapId)}
    })

    res.status(200).json({ leaderboardChars, totalLeaderBoardChars })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error })
  }
}


export {
  getAllMaps,
  getSingleMap,
  checkCoordinates,
  startMapTimer,
  finishMapTimer,
  postTimeToLeaderBoard,
  getLeaderboard
}
