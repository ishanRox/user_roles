import { ApiProperty } from '@nestjs/swagger';
import { AfterCreate, AfterDestroy, AfterUpdate, Column, Table } from 'sequelize-typescript';
import { MultiTenantBase } from 'src/Core/EntityBase/multitenant.base.entity';
// import { Entity, Column, AfterInsert, AfterRemove, AfterUpdate } from 'typeorm';

// @Entity('User')
@Table
export class User extends MultiTenantBase {
  @ApiProperty({ type: String })
  // @Column()
  @Column({allowNull:true})
  UserName: string;

  @ApiProperty({ type: String })
  // @Column()
  @Column({allowNull:true})

  Name: string;

  @ApiProperty({ type: String })
  // @Column()
  @Column({allowNull:true})

  Surname: string;

  @ApiProperty({ type: String })
  // @Column()
  @Column({allowNull:true})
  Email: string;

  @ApiProperty({ type: String })
  // @Column({ select: false })
  @Column
  PasswordHash: string;

  @ApiProperty({ type: String })
  // @Column({nullable:true})
  @Column({allowNull:true})
  RefreshTokenHash: string;

  // @AfterInsert()
  @AfterCreate
  static logInsert(instance:User) {
    console.log('Inserted User with id', instance.Id);
  }

  // @AfterUpdate()
  @AfterUpdate
  static logUpdate(instance:User) {
    console.log('Updated User with id',  instance.Id);
  }

  // @AfterRemove()
  @AfterDestroy
  static logRemove(instance:User) {
    console.log('Removed User with id',  instance.Id);
  }
}
