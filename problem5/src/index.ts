import express from 'express';
import { ResourceController } from './controllers/ResourceController';

const app = express();
const resourceController = new ResourceController();

app.use(express.json());

// Routes
app.post('/resources', (req, res) => resourceController.createResource(req, res));
app.get('/resources', (req, res) => resourceController.getResources(req, res));
app.get('/resources/:id', (req, res) => resourceController.getResourceById(req, res));
app.put('/resources/:id', (req, res) => resourceController.updateResource(req, res));
app.delete('/resources/:id', (req, res) => resourceController.deleteResource(req, res));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
