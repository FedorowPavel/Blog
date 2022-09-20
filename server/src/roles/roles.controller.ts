import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./create-role.dto";
import {ApiTags} from "@nestjs/swagger";


@ApiTags('Roles Api')
@Controller('roles')
export class RolesController {

  constructor(private roleService: RolesService) {
  }

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto)
  }

  @Get('/:value')
  getRole(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value)
  }
}
