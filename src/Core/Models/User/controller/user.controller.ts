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
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import { ApiPaginatedResponse } from 'src/Core/Decorators/api-paginated-response.decorator';
import { UserDto } from '../dto/user.dto';
import { PageOptionsDto } from '../../Page/dto/page-options.dto';
import { PageDto } from '../../Page/dto/page.dto';
import { Serialize } from 'src/Core/Interceptors/serialize.interceptor';
import { CurrentUser } from 'src/Core/Decorators/current.user.decorator';
import { LoginDto } from '../dto/login.dto';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get()
  // @ApiPaginatedResponse(UserDto)
  // @ApiBearerAuth('JWT-auth')
  // findAll(@Query() pageOptionsDto: PageOptionsDto): Promise<PageDto<UserDto>> {
  //   return this.userService.findAll(pageOptionsDto);
  // }

  // @Get('/ByUserName/:userName')
  // @Serialize(UserDto)
  // @ApiBearerAuth('JWT-auth')
  // async findByUserName(@Param('userName') userName: string): Promise<any> {
  //   return await this.userService.findByUserName(userName);
  // }

  // @Get('/ById/:id')
  // @Serialize(UserDto)
  // @ApiBearerAuth('JWT-auth')
  // async findOne(@Param('id') id: string): Promise<any> {
  //   return await this.userService.findById(id);
  // }

  @Serialize(UserDto)
  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: User,
  })
  @ApiBearerAuth('JWT-auth')
  async create(
    @CurrentUser() currentUser: UserDto,
    @Body() createUserDto: CreateUserDto,
  ) {
    return await this.userService.create(currentUser, createUserDto);
  }

  // @Serialize(UserDto)
  // @ApiCreatedResponse({
  //   description: 'The record has been successfully updated.',
  //   type: User,
  // })
  // @Patch('/:id')
  // @ApiBearerAuth('JWT-auth')
  // async patch(
  //   @CurrentUser() currentUser: UserDto,
  //   @Param('id') id: string,
  //   @Body() updateUserDto: UpdateUserDto,
  // ) {
  //   return await this.userService.patch(currentUser, id, updateUserDto);
  // }

  // @Serialize(UserDto)
  // @Post('/ResetPassword/:id')
  // @ApiCreatedResponse({
  //   description: 'User password updated successfully.',
  //   type: User,
  // })
  // @ApiBearerAuth('JWT-auth')
  // async resetPassword(
  //   @CurrentUser() currentUser: UserDto,
  //   @Param('id') id: string,
  //   @Body() loginDto: LoginDto,
  // ) {
  //   return await this.userService.resetPassword(
  //     currentUser,
  //     id,
  //     loginDto.password,
  //   );
  // }

  // @Serialize(UserDto)
  // @ApiCreatedResponse({
  //   description: 'The record has been successfully deleted.',
  //   type: User,
  // })
  // @ApiBearerAuth('JWT-auth')
  // @Delete('/:id')
  // async remove(@CurrentUser() currentUser: UserDto, @Param('id') id: string) {
  //   return await this.userService.remove(currentUser, id);
  // }
}
