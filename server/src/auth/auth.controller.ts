import {Body, Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {LoginUserDto} from "../users/dto/login-user.dto";
import {AuthService} from "./auth.service";
import {RegistrationUserDto} from "../users/dto/registration-user.dto";
import {FileInterceptor} from "@nestjs/platform-express";


@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('/login')
  login(@Body() userDto: LoginUserDto){
    return this.authService.login(userDto)
  }

  @Post('/registration')
  @UseInterceptors(FileInterceptor('image'))
  registration(@Body() userDto: RegistrationUserDto, @UploadedFile() image){
    return this.authService.registration(userDto, image)
  }

}
