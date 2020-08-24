import express from 'express'
import { addTravel, deleteTravels } from '../db'

const router = express.Router()

router.post('/add', async (req, res) => {
  res.status(201)
  res.send(await addTravel(req.body))
})

router.delete('/delete', async (_, res) => {
  res.status(204)
  res.send(await deleteTravels())
})

export default router
