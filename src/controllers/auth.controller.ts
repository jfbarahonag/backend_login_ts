import { Request, Response } from "express"
import jwt from 'jsonwebtoken'

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

export const signin = (req: Request, res: Response) => {
  res.send("Signin")
}

export const profile = (req: Request, res: Response) => {
  res.send("Profile")
}