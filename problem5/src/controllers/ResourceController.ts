import { Request, Response } from 'express';
import { ResourceService } from '../services/ResourceService';

export class ResourceController {
  private resourceService: ResourceService;

  constructor() {
    this.resourceService = new ResourceService();
  }

  async createResource(req: Request, res: Response) {
    const { name, description } = req.body;
    try {
      const resource = await this.resourceService.createResource(name, description);
      res.status(201).json(resource);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create resource' });
    }
  }

  async getResources(req: Request, res: Response) {
    const { name } = req.query;
    try {
      const resources = await this.resourceService.getResources({ name: name as string });
      res.json(resources);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch resources' });
    }
  }

  async getResourceById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const resource = await this.resourceService.getResourceById(Number(id));
      if (!resource) {
        return res.status(404).json({ error: 'Resource not found' });
      }
      res.json(resource);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch resource' });
    }
  }

  async updateResource(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
      const resource = await this.resourceService.updateResource(Number(id), name, description);
      res.json(resource);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update resource' });
    }
  }

  async deleteResource(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await this.resourceService.deleteResource(Number(id));
      res.json({ message: 'Resource deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete resource' });
    }
  }
}
