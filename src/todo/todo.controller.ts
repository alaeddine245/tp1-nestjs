import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Todo } from './Model/todo.model';
import { Request } from 'express';
import { AddTodoDto } from './DTO/Add.Todo.Dto';
import { TodoServiceService } from 'src/todo-service/todo-service.service';
import { identity } from 'rxjs';
import { UpdateTodoDto } from './DTO/update.Todo.Dto';

@Controller('todo')
export class TodoController {
  constructor(private service: TodoServiceService) {
    this.todos = [new Todo('1', 'Sport', 'Faire du sport')];
  }
  todos: Todo[] = [];
  @Get()
  getTodos(@Req() request: Request): Todo[] {
    // console.log(request);
    return this.todos;
  }
  @Post()
  addTodo(@Body() bod: AddTodoDto) {
    return this.service.addToDo(bod);
  }

  @Delete(':id')
  delTodo(@Param('id') id) {
    return this.service.delTodo(id);
  }
  @Put(':id')
  modifTodo(@Param('id') id, @Body() bod: UpdateTodoDto) {
    return this.service.updateTodo(id, bod);
  }
}
