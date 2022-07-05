import express from "express"
import { User, IUser } from "../../model/user"

const router = express.Router()

router.get("/", (req: express.Request, res: express.Response) => {
  res.render("welcome", { name: "", age: 0 })
})

router.post("/", (req: express.Request, res: express.Response) => {
  const user = new User(req.body)
  user.name += 100
  user.age += 100
  console.log(user)
  res.render("welcome", { name: user.name, age: user.age })
})

export default router
