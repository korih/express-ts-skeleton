import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello from the Routes file!');
});

export default router;

