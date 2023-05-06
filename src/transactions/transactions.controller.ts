import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get('/')
  getAllTransactions(): string {
    return 'Get all users';
  }

  @Post('/')
  createTransaction(
    @Body() createTransactionDto: CreateTransactionDto,
  ): string {
    return 'j';
  }

  @Get('/:id')
  getTransaction(): string {
    return ',';
  }
}
