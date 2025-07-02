import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/user.module';
import { UserEntitiy } from './domain/entities/user.entity';

@Module({
  imports: [UsersModule,
   TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'admin',
    database: 'db_checkout',
    entities: [UserEntitiy],
    synchronize: true

  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
