import { Repository } from 'typeorm';
import { User } from './user.entity';
import { SignUpDto } from './dto/auth-credentials.dto';
import { BadRequestException } from '@nestjs/common';
import { randomInt } from 'crypto';

export class UserRepository extends Repository<User> {
  async signUp(signUpDto: SignUpDto): Promise<void> {
    const { email, password, confirmPassword, phoneNumber } = signUpDto;

    if (!(password === confirmPassword)) {
      throw new BadRequestException('Password does not match Confirm Password');
    }

    const user = new User();
    user.id = randomInt(200).toString();
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.password = password;

    await user.save();
  }
}
