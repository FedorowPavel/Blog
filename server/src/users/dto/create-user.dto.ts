import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

  @ApiProperty({example: 'user@mail.com', description: 'unique email'})
  @IsString({message: 'must be a string'})
  @IsEmail({}, {message: 'incorrect email'})
  readonly email: string;


  @ApiProperty({example: '1234', description: 'password'})
  @IsString({message: 'must be a string'})
  @Length(4,16, {message: 'must be between 4 and 16'})
  readonly password: string
}
