import { Account } from 'src/accounts/account.entity';
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
} from 'typeorm';

@Entity({ name: 'transactions' })
export class Transaction extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  transactionUser: string;

  @Column()
  transactionAccount: string;

  @ManyToOne(() => User, (user) => user.transactions, { eager: true })
  @JoinColumn({ name: 'transactionUser' })
  user: User;

  @ManyToOne(() => Account, (account) => account.transactions, { eager: true })
  @JoinColumn({ name: 'transactionAccount' })
  account: Account;

  @DeleteDateColumn({ select: false, nullable: true, insert: false })
  deletedAt?: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
