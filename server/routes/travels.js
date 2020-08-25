import express from 'express';
import { addTravel, deleteTravels, getTravels } from '../db';

const router = express.Router();

router.post('/add', async (req, res) => {
  const dbRes = addTravel(req.body);
  res.status(201);
  res.json(dbRes);
});

router.post('/find', async (req, res) => {
  res.status(200);
  res.json(await getTravels(req.body));
});

router.delete('/delete', async (_, res) => {
  res.status(204);
  res.send(await deleteTravels());
});

export default router;
