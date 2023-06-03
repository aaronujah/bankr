import { Controller, Patch, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(): string {
    return null;
  }

  @Post('/signin')
  signIn(): string {
    return null;
  }

  @Patch('/forgotPassword')
  forgotPassword(): string {
    return 'j';
  }

  @Patch('/updateMyPassword')
  updatePassword(): string {
    return 'j';
  }
}
