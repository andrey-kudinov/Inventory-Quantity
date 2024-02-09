import express from 'express';
import { getQuantity } from './get-quantity.js';

const app = express();

const port = 3000;

app.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const data = await getQuantity(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
