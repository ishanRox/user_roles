import { Module } from '@nestjs/common';
import { RoleService } from './service/role.service';
import { RoleController } from './controller/role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'src/Core/Logger/logger.module';
// import { RoleRepository } from './repository/role.repository';
import { Role } from './entities/role.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    // TypeOrmModule.forFeature([RoleRepository]),
    SequelizeModule.forFeature([Role]),
     LoggerModule],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService],
})
export class RoleModule {}
