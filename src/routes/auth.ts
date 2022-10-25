import { profile, signin, signup } from "../controllers/auth.controller"
import { Router } from "express"
import { tokenValidation } from "../libs/verifyToken"

const router = Router()

router.post('/signup',   signup)
router.post('/signin',   signin)
router.get('/profile' /*route*/, tokenValidation /*middleware*/,  profile /*controller*/)

router.get('/', (req, res) => {
  res.send('Hello world!!')
})

export default router