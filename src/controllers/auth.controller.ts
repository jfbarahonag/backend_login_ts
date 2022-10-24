import { Request, Response } from "express"
import User, { IUser } from "../models/user"

export const signup = async (req: Request, res: Response) => {

  const user: IUser = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  })
  const savedUser = await user.save()
  console.log(savedUser);
  
  res.send("Signup")
}

export const signin = (req: Request, res: Response) => {
  res.send("Signin")
}

export const profile = (req: Request, res: Response) => {
  res.send("Profile")
}