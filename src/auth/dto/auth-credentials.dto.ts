import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignUpDto {
  @IsString()
  @MinLength(5, { message: 'Email is too short' })
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'Your password must be more than eight characters' })
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
  confirmPassword: string;
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
