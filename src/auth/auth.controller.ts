import {
  Body,
  Controller,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @UsePipes(ValidationPipe)
  signUp(@Body() signUpDto: SignUpDto): Promise<string> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/signin')
  @UsePipes(ValidationPipe)
  signIn(@Body(ValidationPipe) signInDto: SignInDto): Promise<string> {
    return this.authService.signIn(signInDto);
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
