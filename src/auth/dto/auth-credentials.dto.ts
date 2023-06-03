import { Equals, IsEmail, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @IsString()
  @MinLength(5, { message: 'Email is too short' })
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'Your password must be more than eight characters' })
  password: string;

  @Equals((o) => o.password)
  passwordConfirm: string;
}

export class SignInDto {
  @IsString()
  @MinLength(5, { message: 'Email is too short' })
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'Your password must be more than eight characters' })
  password: string;
}
