import express from 'express';
import { addTravel, deleteTravels } from '../db';

const router = express.Router();

router.post('/add', async (req, res) => {
  const dbRes = addTravel(req.body);
  res.status(201);
  res.json(dbRes);
});

router.delete('/delete', async (_, res) => {
  res.status(204);
  res.send(await deleteTravels());
});

export default router;
