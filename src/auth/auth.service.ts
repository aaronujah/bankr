import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async signUp(): Promise<string> {
    return 'l';
  }

  async signIn(): Promise<string> {
    return 'l';
  }

  async forgotPassword(): Promise<string> {
    return 'l';
  }

  async updatePassword(): Promise<string> {
    return 'l';
  }
}
