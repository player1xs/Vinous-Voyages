import Winery from '../models/winery.js'
import User from '../models/user.js'
import mongoose from 'mongoose'

import wineryData from './data/wineries.js'
import userData from './data/users.js'
import 'dotenv/config.js'

async function seed() {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('Database connection established, Commander!')

    const { deletedCount: deletedWineryCount } = await Winery.deleteMany()
    console.log(`deleted ${deletedWineryCount} wineries from the database`)

    const { deletedCount: deletedUserCount } = await User.deleteMany()
    console.log(`deleted ${deletedUserCount} users from the database`)

    const usersCreated = await User.create(userData)
    console.log(`seeded ${usersCreated.length} users to the database`)

    const ownedWineries = wineryData.map(winery => {
      const randomUserIndex = Math.floor(Math.random() * usersCreated.length)
      return { ...winery, owner: usersCreated[randomUserIndex]._id }
    })

    const wineriesCreated = await Winery.create(ownedWineries)
    console.log(`seeded ${wineriesCreated.length} wineries to database`)

    await mongoose.connection.close()
    console.log('closed the connection to the database, bossman')

  } catch (error) {
    console.log(error)

    await mongoose.connection.close()
    console.log('closed the connection to the database, bossman')
  }
}
seed()