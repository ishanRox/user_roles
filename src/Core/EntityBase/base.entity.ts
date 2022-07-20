import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class Base {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn({ nullable: true })
  UpdatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  DeletedAt: Date;

  @Column('uuid', { name: 'CreatedBy', nullable: true })
  CreatedBy: string;

  @Column('uuid', { name: 'UpdatedBy', nullable: true })
  UpdatedBy: string;

  @Column('uuid', { name: 'DeletedBy', nullable: true })
  DeletedBy: string;

  @Column({ default: 0 })
  Version: number;
}
