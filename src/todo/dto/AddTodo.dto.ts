import { TodoStatusEnum } from '../enums/todo-status.enum';
import {
  IsNotEmpty,
  MaxLength,
  MinLength,
  ValidationArguments,
} from 'class-validator';

export class AddTodoDto {
  @IsNotEmpty({
    message: (validationData: ValidationArguments) => {
      return 'name should not be empty';
    },
  })
  @MinLength(3, {
    message: (validationData: ValidationArguments) => {
      return 'name should be longer than 3';
    },
  })
  @MaxLength(10, {
    message: (validationData: ValidationArguments) => {
      return 'name should be less than 10';
    },
  })
  name: string;
  @IsNotEmpty({
    message: (validationData: ValidationArguments) => {
      return 'description should not be empty';
    },
  })
  @MinLength(10, {
    message: (validationData: ValidationArguments) => {
      return 'description should be longer than 10';
    },
  })
  description: string;
}
