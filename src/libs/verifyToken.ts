import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


//middleware
export const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('auth-token')
  if (!token) return res.status(401).json('Access denied')

  const payload = jwt.verify(token, process.env.TOKEN_SECRET || 'tokenfake')
  console.log('payload: ', payload);
  

  next()
}