import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
// import { UserRepository } from './repository/user.repository';
import { LoggerModule } from 'src/Core/Logger/logger.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { usersProviders } from './repository/user.providers';

@Module({
  imports: [
    // TypeOrmModule.forFeature([UserRepository]),
    SequelizeModule.forFeature([User]),
    LoggerModule
  ],
  controllers: [UserController],
  providers: [UserService, ...usersProviders],
  exports: [UserService],
})
export class UserModule { }
