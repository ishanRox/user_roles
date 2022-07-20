import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ApiPaginatedResponse } from 'src/Core/Decorators/api-paginated-response.decorator';
import { PageOptionsDto } from '../../Page/dto/page-options.dto';
import { PageDto } from '../../Page/dto/page.dto';
import { Serialize } from 'src/Core/Interceptors/serialize.interceptor';
import { CurrentUser } from 'src/Core/Decorators/current.user.decorator';
import { UserDto } from '../../User/dto/user.dto';
import { CreateRoleDto } from '../dto/create-role.dto';
import { RoleDto } from '../dto/role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { Role } from '../entities/role.entity';
import { RoleService } from '../service/role.service';

@Controller('role')
@ApiTags('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  // @Get()
  // @ApiPaginatedResponse(RoleDto)
  // @ApiBearerAuth('JWT-auth')
  // findAll(@Query() pageOptionsDto: PageOptionsDto): Promise<PageDto<RoleDto>> {
  //   return this.roleService.findAll(pageOptionsDto);
  // }

  // @Get('/ByName/:name')
  // @Serialize(RoleDto)
  // @ApiBearerAuth('JWT-auth')
  // async findByName(@Param('name') name: string): Promise<any> {
  //   return await this.roleService.findByName(name);
  // }

  // @Get('/ById/:id')
  // @Serialize(RoleDto)
  // @ApiBearerAuth('JWT-auth')
  // async findOne(@Param('id') id: string): Promise<any> {
  //   return await this.roleService.findById(id);
  // }

  // @Serialize(RoleDto)
  // @Post()
  // @ApiCreatedResponse({
  //   description: 'The record has been successfully created.',
  //   type: Role,
  // })
  // @ApiBearerAuth('JWT-auth')
  // async create(
  //   @CurrentUser() currentUser: UserDto,
  //   @Body() createRoleDto: CreateRoleDto,
  // ) {
  //   return await this.roleService.create(currentUser, createRoleDto);
  // }

  // @Serialize(RoleDto)
  // @ApiCreatedResponse({
  //   description: 'The record has been successfully updated.',
  //   type: Role,
  // })
  // @Patch('/:id')
  // @ApiBearerAuth('JWT-auth')
  // async patch(
  //   @CurrentUser() currentUser: UserDto,
  //   @Param('id') id: string,
  //   @Body() updateRoleDto: UpdateRoleDto,
  // ) {
  //   return await this.roleService.patch(currentUser, id, updateRoleDto);
  // }

  // @Serialize(RoleDto)
  // @ApiCreatedResponse({
  //   description: 'The record has been successfully deleted.',
  //   type: Role,
  // })
  // @ApiBearerAuth('JWT-auth')
  // @Delete('/:id')
  // async remove(@CurrentUser() currentUser: UserDto, @Param('id') id: string) {
  //   return await this.roleService.remove(currentUser, id);
  // }
}
