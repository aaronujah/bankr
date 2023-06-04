import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountsService {
  async createAccount(): Promise<string> {
    return 'l';
  }

  async addAccount(): Promise<string> {
    return 'l';
  }

  async getAllAccounts(): Promise<string> {
    return 'l';
  }

  async getAccount(): Promise<string> {
    return 'l';
  }

  async deleteAccount(): Promise<string> {
    return 'l';
  }
}
