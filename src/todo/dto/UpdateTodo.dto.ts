import { OmitType, PartialType } from '@nestjs/mapped-types';
import { MaxLength, MinLength } from 'class-validator';
import { TodoStatusEnum } from '../enums/todo-status.enum';
import { AddTodoDto } from './AddTodo.dto';

export class UpdateTodoDto {
  @MinLength(3)
  @MaxLength(10)
  name: string;

  @MinLength(10)
  description: string;
  status: TodoStatusEnum;
}
