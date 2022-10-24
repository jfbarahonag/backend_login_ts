import { profile, signin, signup } from "../controllers/auth.controller"
import { Router } from "express"

const router = Router()

router.post('/signup',   signup)
router.post('/signin',   signin)
router.get('/profile',  profile)

router.get('/', (req, res) => {
  res.send('Hello world!!')
})

export default router