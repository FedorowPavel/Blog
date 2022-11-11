import {Body, Controller, Post, Req, Res, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {LoginUserDto} from "../users/dto/login-user.dto";
import {AuthService} from "./auth.service";
import {RegistrationUserDto} from "../users/dto/registration-user.dto";
import {FileInterceptor} from "@nestjs/platform-express";
import {Response} from "express";
import {Request} from "express";

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('/login')
  login(
    @Body() userDto: LoginUserDto,
    @Res({ passthrough: true }) response: Response
  ){
    return this.authService.login(userDto, response)
  }

  @Post('/loginWithCookies')
  loginWithCookies(
    @Body() userDto: LoginUserDto,
    @Res({ passthrough: true }) response: Response,
    @Req() request: Request
  ){
    return this.authService.loginWithCookies(userDto, response, request)
  }

  @Post('/logout')
  logout(
    @Body() userDto: LoginUserDto,
    @Res({ passthrough: true }) response: Response
  ){
    return this.authService.logout(userDto, response)
  }

  @Post('/registration')
  @UseInterceptors(FileInterceptor('image'))
  registration(
    @Body() userDto: RegistrationUserDto,
    @UploadedFile() image,
    @Res({ passthrough: true }) response: Response
  ){
    return this.authService.registration(userDto, image, response)
  }

}
