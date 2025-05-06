import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { TodoService } from './todo.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('todos')
@UseGuards(JwtAuthGuard)
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post()
  async createTodo(
    @Request() req,
    @Body('title') title: string,
    @Body('description') description?: string,
  ) {
    return this.todoService.createTodo(req.user.id, title, description);
  }

  @Get()
  async getTodos(@Request() req) {
    return this.todoService.getTodos(req.user.id);
  }

  @Get(':id')
  async getTodoById(@Request() req, @Param('id') id: string) {
    return this.todoService.getTodoById(+id, req.user.id);
  }

  @Put(':id')
  async updateTodo(
    @Request() req,
    @Param('id') id: string,
    @Body('title') title?: string,
    @Body('description') description?: string,
    @Body('completed') completed?: boolean,
  ) {
    return this.todoService.updateTodo(+id, req.user.id, {
      title,
      description,
      completed,
    });
  }

  @Delete(':id')
  async deleteTodo(@Request() req, @Param('id') id: string) {
    return this.todoService.deleteTodo(+id, req.user.id);
  }
} 