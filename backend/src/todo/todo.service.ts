import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async createTodo(userId: number, title: string, description?: string) {
    return this.prisma.client.todo.create({
      data: {
        title,
        description,
        userId,
      },
    });
  }

  async getTodos(userId: number) {
    return this.prisma.client.todo.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getTodoById(id: number, userId: number) {
    const todo = await this.prisma.client.todo.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    return todo;
  }

  async updateTodo(id: number, userId: number, data: { title?: string; description?: string; completed?: boolean }) {
    const todo = await this.prisma.client.todo.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    return this.prisma.client.todo.update({
      where: { id },
      data,
    });
  }

  async deleteTodo(id: number, userId: number) {
    const todo = await this.prisma.client.todo.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    await this.prisma.client.todo.delete({
      where: { id },
    });
  }
} 