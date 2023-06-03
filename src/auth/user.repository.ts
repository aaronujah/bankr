import { DataSource, Entity, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { SignInDto, SignUpDto } from './dto/auth-credentials.dto';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { randomInt } from 'crypto';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

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

  async validateUser(signInDto: SignInDto): Promise<JwtPayload> {
    const { email, password } = signInDto;
    console.log(email, password);
    const user = await this.findOne({
      where: { email },
      select: { password: true, id: true },
    });

    // Create session and add the session Id to the return

    if (user && (await user.validatePassword(password, user.password))) {
      return { id: user.id };
    } else {
      return null;
    }
  }
}
