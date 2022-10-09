import {Body, Controller, Get, Post, UseGuards, UsePipes} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {JwtAuthGuards} from "../auth/jwt-auth.guards";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";
import {ValidationPipe} from "../pipes/validation.pipe";


@ApiTags('Users Api')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
  }

  // @ApiOperation({summary: 'user creation'})
  // @ApiResponse({status: 200, type: User})
  // @UsePipes(ValidationPipe)
  // @Post()
  // create(@Body() userDto: CreateUserDto) {
  //   return this.userService.createUser(userDto)
  // }

  @ApiOperation({summary: 'get all users from DB'})
  @ApiResponse({status: 200, type: [User]})
  @UseGuards(JwtAuthGuards)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers()
  }

  @ApiOperation({summary: 'give role'})
  @ApiResponse({status: 200})
  @UseGuards(JwtAuthGuards)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.userService.addRole(dto)
  }

  @ApiOperation({summary: 'ban user'})
  @ApiResponse({status: 200})
  @UseGuards(JwtAuthGuards)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/ban')
  ban(@Body() dto: BanUserDto) {
    return this.userService.ban(dto)
  }

}
