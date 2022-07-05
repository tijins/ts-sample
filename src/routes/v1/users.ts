import express from "express"
const router = express.Router()

// GETリクエスト
router.get("/", (req: express.Request, res: express.Response) => {
  try {
    res.status(200).json({ userId: "U001", userName: "Yamada Taro" })
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message })
    } else {
      res.status(500).end()
    }
  }
})

// POSTリクエスト
router.post("/", (req: express.Request, res: express.Response) => {
  try {
    res.status(200).json({ message: "登録しました" })
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message })
    } else {
      res.status(500).end()
    }
  }
})

export default router
