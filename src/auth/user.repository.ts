import { Repository } from 'typeorm';
import { User } from './user.entity';
import { SignUpDto } from './dto/auth-credentials.dto';

export class UserRepository extends Repository<User> {
  async signUp(signUpDto: SignUpDto): Promise<void> {
    const { email, password } = signUpDto;

    const user = new User();
    user.email = email;
    user.password = password;

    await user.save();
  }
}
