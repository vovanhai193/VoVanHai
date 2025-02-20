import { PrismaClient, Resource } from '@prisma/client';

const prisma = new PrismaClient();

export class ResourceModel {
  async create(data: { name: string; description: string }): Promise<Resource> {
    return prisma.resource.create({ data });
  }

  async findAll(filter?: { name?: string }): Promise<Resource[]> {
    return prisma.resource.findMany({
      where: {
        name: filter?.name ? { contains: filter.name } : undefined,
      },
    });
  }

  async findById(id: number): Promise<Resource | null> {
    return prisma.resource.findUnique({ where: { id } });
  }

  async update(id: number, data: { name?: string; description?: string }): Promise<Resource> {
    return prisma.resource.update({ where: { id }, data });
  }

  async delete(id: number): Promise<void> {
    await prisma.resource.delete({ where: { id } });
  }
}
