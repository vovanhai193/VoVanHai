import { ResourceModel } from '../models/ResourceModel';

export class ResourceService {
  private resourceModel: ResourceModel;

  constructor() {
    this.resourceModel = new ResourceModel();
  }

  async createResource(name: string, description: string) {
    return this.resourceModel.create({ name, description });
  }

  async getResources(filter?: { name?: string }) {
    return this.resourceModel.findAll(filter);
  }

  async getResourceById(id: number) {
    return this.resourceModel.findById(id);
  }

  async updateResource(id: number, name?: string, description?: string) {
    return this.resourceModel.update(id, { name, description });
  }

  async deleteResource(id: number) {
    return this.resourceModel.delete(id);
  }
}
