import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Logger } from './Logger.middleware';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [PremierModule, TodoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Logger).forRoutes('todo');
  }
}
