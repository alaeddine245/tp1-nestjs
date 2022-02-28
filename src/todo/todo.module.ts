import { Module } from '@nestjs/common';
import { TodoServiceService } from 'src/todo-service/todo-service.service';
import { TodoController } from './todo.controller';

@Module({
  controllers: [TodoController],
  providers: [TodoServiceService],
})
export class TodoModule {}
