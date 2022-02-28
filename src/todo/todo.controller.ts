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
import { AddTodoDto } from './DTO/AddTodo.dto';
import { TodoService } from 'src/todo-service/todo-service.service';
import { identity } from 'rxjs';
import { UpdateTodoDto } from './DTO/UpdateTodo.dto';

@Controller('todo')
export class TodoController {
  constructor(private service: TodoService) {}
  @Get()
  getTodos(@Req() request: Request): Todo[] {
    // console.log(request);
    return this.service.getTodos();
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
