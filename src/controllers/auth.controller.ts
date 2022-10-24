import { Request, Response } from "express"

export const signup = (req: Request, res: Response) => {
  res.send("Signup")
}

export const signin = (req: Request, res: Response) => {
  res.send("Signin")
}

export const profile = (req: Request, res: Response) => {
  res.send("Profile")
}