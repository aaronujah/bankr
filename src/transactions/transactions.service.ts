import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  getAllTransactions(): string {
    return 'j';
  }

  getTransaction(transactionId: string): string {
    return 'j';
  }

  createTransaction(createTransactionDto: CreateTransactionDto): string {
    return 'j';
  }
}
