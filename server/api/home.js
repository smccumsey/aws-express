import { Router } from 'express'

const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' },
]

/* GET users listing. */
router.get('/home', function (req, res, next) {
  res.json(users)
})

export default router
