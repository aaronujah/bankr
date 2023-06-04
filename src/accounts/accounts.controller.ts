import { Controller, Delete, Get, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private accountService: AccountsService) {}

  @Post('/accounts')
  createAccount(): Promise<string> {
    return this.accountService.createAccount();
  }

  @Post('/accounts/add')
  addAccount(): Promise<string> {
    return this.accountService.createAccount();
  }

  @Get('/accounts')
  getAllAccounts(): Promise<string> {
    return this.accountService.createAccount();
  }

  @Get('/accounts/:accountId')
  getAccount(): Promise<string> {
    return this.accountService.createAccount();
  }

  @Delete('/accounts/:accountId')
  deleteAccount(): Promise<string> {
    return this.accountService.createAccount();
  }
}
