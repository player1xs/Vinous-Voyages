import User from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    return res.status(201).json({ message: `Welcome ${newUser.username}` })
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

export const login = async (req, res) => {
  try {
    const userToLogin = await User.findOne({ email: req.body.email })
    if (!userToLogin || !bcrypt.compareSync(req.body.password, userToLogin.password)) {
      throw new Error(!userToLogin ? 'Email not found' : 'Passwords don\'t match')
    }
    const token = jwt.sign({ sub: userToLogin._id }, process.env.SECRET, { expiresIn: '10d' })
    return res.json({ message: `Welcome ${userToLogin.username}`, token: token })
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}

export const getProfile = async (req, res) => {
  try {
    const profile = await User.findById(req.currentUser._id).populate('wineriesCreated')
    return res.json(profile)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}