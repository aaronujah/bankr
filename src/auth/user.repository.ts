import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { SignInDto, SignUpDto } from './dto/auth-credentials.dto';
import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
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
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException(error.message);
      } else {
        throw new InternalServerErrorException(error.message);
      }
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  async validateUser(signInDto: SignInDto): Promise<string> {
    const { email, password } = signInDto;
    console.log(email);
    const user = await this.findOne({
      where: { email },
      select: { password: true, id: true },
    });

    // Create session and add the session Id to the return

    if (user && (await user.validatePassword(password, user.password))) {
      return user.id;
    } else {
      return null;
    }
  }
}
