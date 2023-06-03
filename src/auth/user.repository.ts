import { Repository } from 'typeorm';
import { User } from './user.entity';
import { SignUpDto } from './dto/auth-credentials.dto';
import { BadRequestException } from '@nestjs/common';

export class UserRepository extends Repository<User> {
  async signUp(signUpDto: SignUpDto): Promise<void> {
    const { email, password, confirmPassword } = signUpDto;

    if (!(password === confirmPassword)) {
      throw new BadRequestException('Password does not match Confirm Password');
    }

    const user = new User();
    user.email = email;
    user.password = password;

    await user.save();
  }
}
