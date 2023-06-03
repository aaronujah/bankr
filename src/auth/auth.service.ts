import { Injectable } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<void> {
    return await this.userRepository.signUp(signUpDto);
  }

  async signIn(signInDto: SignInDto): Promise<string> {
    return await this.userRepository.validateUser(signInDto);
  }

  async forgotPassword(): Promise<string> {
    return 'l';
  }

  async updatePassword(): Promise<string> {
    return 'l';
  }
}
