// import {
//   Column,
//   CreateDateColumn,
//   DeleteDateColumn,
//   PrimaryGeneratedColumn,
//   UpdateDateColumn,
// } from 'typeorm';

import {  Column, CreatedAt, DataType, DeletedAt, Model, PrimaryKey, Sequelize, UpdatedAt } from "sequelize-typescript";

export abstract class MultiTenantBase extends Model {
  // @PrimaryGeneratedColumn('uuid')
   @PrimaryKey
   @Column({primaryKey:true,allowNull: false,unique: true,type: DataType.UUIDV4, autoIncrement: true,defaultValue: DataType.UUIDV4})
  Id: string;

  // @CreateDateColumn()
  @CreatedAt
  CreatedAt: Date;

  // @UpdateDateColumn({ nullable: true })
  @UpdatedAt
  UpdatedAt: Date;

  // @DeleteDateColumn({ nullable: true })
  @DeletedAt
  DeletedAt: Date;

  // @Column('uuid', { name: 'CreatedBy', nullable: true })
  @Column({allowNull:true})
  CreatedBy: string;

  // @Column('uuid', { name: 'UpdatedBy', nullable: true })
  @Column({allowNull:true})
  UpdatedBy: string;

  // @Column('uuid', { name: 'DeletedBy', nullable: true })
  @Column({allowNull:true})
  DeletedBy: string;

  // @Column({ default: 0 })
  @Column({defaultValue:0})
  Version: number;

  // @Column('uuid', { name: 'TenantId', nullable: true })
  @Column({allowNull:true})
  TenantId: string;
}
