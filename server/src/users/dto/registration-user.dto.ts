import {LoginUserDto} from "./login-user.dto";

export class RegistrationUserDto extends LoginUserDto {
  readonly phone: string;
  readonly nickname: string;
}
