import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {LoginUserDto} from "../users/dto/login-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from "bcryptjs"
import {User} from "../users/users.model";
import {RegistrationUserDto} from "../users/dto/registration-user.dto";
import {Response} from "express";
import {FilesService} from "../files/files.service";
import {Request} from "express";


@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private filesService: FilesService
    ) {}

  async login(userDto: LoginUserDto, response: Response){
    const user = await this.validateUser(userDto)
    const token  = await this.generateToken(user)
    response.cookie(
      'token',
      token.token,
      {
        httpOnly: true,
      }).send({user})
  }

  async loginWithCookies(userDto: LoginUserDto, response: Response, request: Request){
    const token = request.cookies.token
    if(!request.cookies.token) {
      response.send(null).status(200)
    }
    const user = this.jwtService.verify(token);
    if(user) {
      response.cookie(
        'token',
        token,
        {
          httpOnly: true,
        }).send(user)
    }

  }

  async logout(userDto: LoginUserDto, response: Response){
    response.clearCookie('token').send({user: null})
  }

  async registration(userDto: RegistrationUserDto, image: File, response: Response){
    const candidate = await this.userService.getUserByEmail(userDto.email)
    if(candidate) {
      throw new HttpException('user exists', HttpStatus.BAD_REQUEST)
    }
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const imageName = await this.filesService.createFile(image)
    const user = await this.userService.createUser({...userDto, image: imageName, password: hashPassword})
    const token  = await this.generateToken(user)
    response.cookie(
      'token',
      token.token,
      {
        httpOnly: true,
      }).send({user})
  }

  private async generateToken(user: User) {
    const payload = {
      email: user.email,
      id: user.id,
      roles: user.roles,
      phone: user.phone,
      nickname: user.nickname,
      image: user.image,
      banned: user.banned,
      banReason: user.banReason
    }
    return {
      token: this.jwtService.sign(payload)
    }
  }

  private async validateUser(userDto: LoginUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email)
    const passwordEquals = await bcrypt.compare(userDto.password, user.password)
    if(user && passwordEquals) {
      return user
    }
    throw new UnauthorizedException({message: 'incorrect email or password'})
  }
}
