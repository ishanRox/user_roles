import { ApiProperty } from '@nestjs/swagger';
import { Table } from 'sequelize-typescript';
import { MultiTenantBase } from 'src/Core/EntityBase/multitenant.base.entity';
import { Entity, Column, AfterInsert, AfterRemove, AfterUpdate } from 'typeorm';

// @Entity('Role')
@Table
export class Role extends MultiTenantBase {
  @ApiProperty({ type: String })
  // @Column()
  Name: string;

  // @AfterInsert()
  // logInsert() {
  //   console.log('Inserted User with id', this.Id);
  // }

  // @AfterUpdate()
  // logUpdate() {
  //   console.log('Updated User with id', this.Id);
  // }

  // @AfterRemove()
  // logRemove() {
  //   console.log('Removed User with id', this.Id);
  // }
}
