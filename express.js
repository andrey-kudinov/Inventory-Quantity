import cors from 'cors';
import express from 'express';
import { getQuantity } from './get-quantity.js';

const app = express();
app.use(cors());

const port = 3000;

app.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const data = await getQuantity(id);
    const quantity = data?.productVariant?.inventoryItem?.inventoryLevels?.edges?.map(({ node }) => ({
      id: node.location.id,
      name: node.location.name,
      available: node.available,
    }));
    res.json(quantity);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
