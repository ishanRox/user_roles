import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { LoggerModule } from './Core/Logger/logger.module';
import { RoleModule } from './Core/Models/Role/role.module';
import { UserModule } from './Core/Models/User/user.module';
import { LoggerMiddleware } from './Core/Middleware/logger.middleware';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { AllExceptionsFilter } from './Core/ExceptionFilters/all.exception.filter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Core/Models/User/entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';
@Module({
  imports: [LoggerModule,
    UserModule,
    RoleModule, ConfigModule.register({ folder: './config' }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        autoLoadModels: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    // TypeOrmModule.forRootAsync({
    //   useFactory: async (configService: ConfigService) => ({
    //     type: 'mysql',
    //     host: configService.get('DB_HOST'),
    //     port: +configService.get('DB_PORT'),
    //     username: configService.get('DB_USERNAME'),
    //     password: configService.get('DB_PASSWORD'),
    //     database: configService.get('DB_DATABASE'),
    //     entities: ['dist/**/*.entity{.ts,.js}'],
    //     synchronize: false,
    //     migrations: ['dist/Db/Migrations/*.js'],
    //     cli: {
    //       migrationsDir: 'src/Db/Migrations',
    //     },
    //   })
    //   , inject: [ConfigService],
    //   imports: [ConfigModule],
    // })
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
