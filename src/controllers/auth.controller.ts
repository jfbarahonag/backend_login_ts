import { Request, Response } from "express"
import jwt from 'jsonwebtoken'
import user from "../models/user"

import User, { IUser } from "../models/user"

export const signup = async (req: Request, res: Response) => {
  // saving a new user
  const user: IUser = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  })
  // encrypt pass
  user.password = await user.encryptPassword(user.password)
  // save user
  const savedUser = await user.save()
  // tokenizing
  const token: string = jwt.sign({_id: savedUser._id}, process.env.TOKEN_SECRET || 'tokenfake')
  
  res.header('auth-token', token).json(savedUser)
}

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const user = await User.findOne({email})
  if (!user) return res.status(400).json('Email or password is wrong')
  
  const valid = await user.validatePassword(password)
  if (!valid) return res.status(400).json('Invalid email or password')

  const token: string = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET ||'tokenfake', {
    expiresIn: 60 * 60 * 24 // 60 sec * 60 mins * 24 hrs = 1 day
  })

  res.header('auth-token', token).json(user)

  res.send("Signin")
}

export const profile = (req: Request, res: Response) => {
  res.send("Profile")
}