import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Bank } from './interfaces/account.interface';
import { User } from 'src/auth/user.entity';

@Entity({ name: 'accounts' })
export class Account extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column({ update: false, enum: Bank })
  bank: Bank;

  @Column()
  accountNumber: string;

  @Column()
  accountUser: string;

  @ManyToOne(() => User, (user) => user.accounts, { eager: true })
  @JoinColumn({ name: 'accountUser' })
  user: User;

  @OneToMany(() => Transaction, (transaction) => transaction.account, {
    eager: false,
  })
  transactions: Transaction[];

  @DeleteDateColumn({ select: false, nullable: true, insert: false })
  deletedAt?: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
