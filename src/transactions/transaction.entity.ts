import { Account } from 'src/accounts/account.entity';
import { Bank } from 'src/accounts/interfaces/account.interface';
import { User } from 'src/auth/user.entity';
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
  VersionColumn,
} from 'typeorm';
import {
  TransactionStatus,
  TransactionType,
} from './interfaces/transaction.interface';

@Entity({ name: 'transactions' })
export class Transaction extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  amount: number;

  @Column()
  destinationAccount: string;

  @Column()
  destinationBank: Bank;

  @Column()
  narration: string;

  @Column()
  transactionType: TransactionType;

  @Column()
  status: TransactionStatus;

  @Column()
  transactionUser: string;

  @Column()
  transactionAccount: string;

  @Column()
  transactions?: [Transaction];

  @ManyToOne(() => User, (user) => user.transactions, { eager: true })
  @JoinColumn({ name: 'transactionUser' })
  user: User;

  @ManyToOne(() => Account, (account) => account.transactions, { eager: true })
  @JoinColumn({ name: 'transactionAccount' })
  account: Account;

  @ManyToOne(() => Transaction, (transaction) => transaction.id)
  @JoinColumn({ name: 'transactions' })
  combinedTransaction?: Transaction;

  @DeleteDateColumn({ select: false, nullable: true, insert: false })
  deletedAt?: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @VersionColumn({ nullable: true })
  version: number;
}
