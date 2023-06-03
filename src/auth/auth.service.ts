import { Injectable } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  async signUp(signUpDto: SignUpDto): Promise<string> {
    return 'l';
  }

  async signIn(signInDto: SignInDto): Promise<string> {
    return 'l';
  }

  async forgotPassword(): Promise<string> {
    return 'l';
  }

  async updatePassword(): Promise<string> {
    return 'l';
  }
}
