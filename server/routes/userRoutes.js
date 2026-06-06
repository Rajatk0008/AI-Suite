import express from "express"
import { getPublicCreations, getUserCreations, togglelikeCreation } from "../controllers/userController.js"
import { auth } from "../middlewares/auth.js"

const userRouter = express.Router()

userRouter.get('/get-user-creations',auth,getUserCreations)
userRouter.get('/get-published-creations',auth,getPublicCreations)
userRouter.post('/toggle-like-creations',auth,togglelikeCreation)

export default userRouter;