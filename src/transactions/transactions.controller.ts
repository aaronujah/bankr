import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get('/')
  getAllTransactions(): string {
    return this.transactionsService.getAllTransactions();
  }

  @Post('/')
  createTransaction(
    @Body() createTransactionDto: CreateTransactionDto,
  ): string {
    return this.transactionsService.createTransaction(createTransactionDto);
  }

  @Get('/:id')
  getTransaction(@Param('agentId') transactionId: string): string {
    return this.transactionsService.getTransaction(transactionId);
  }
}
