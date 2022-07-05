import express from "express"
import usersRouter from "./users"
import welcomeRouter from "./welcome"

const router = express.Router()

// v1以下のルーティング
router.use("/users", usersRouter)
router.use("/welcome", welcomeRouter)

export default router
