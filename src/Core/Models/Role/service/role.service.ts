import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { LoggerService } from 'src/Core/Logger/logger.service';
import { PageOptionsDto } from '../../Page/dto/page-options.dto';
import { PageDto } from '../../Page/dto/page.dto';
import { UserDto } from '../../User/dto/user.dto';
import { CreateRoleDto } from '../dto/create-role.dto';
import { RoleDto } from '../dto/role.dto';
import { Role } from '../entities/role.entity';
// import { RoleRepository } from '../repository/role.repository';

@Injectable()
export class RoleService {
  constructor(
    // private roleRepository: RoleRepository,
    private logger: LoggerService,
  ) {
    this.logger.setContext('RoleService');
    this.logger.log('RoleService created');
  }

  // async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<RoleDto>> {
  //   return await this.roleRepository.findAll(pageOptionsDto);
  // }

  // async findByName(name: string) {
  //   return await this.roleRepository.findByName(name);
  // }

  // async findById(id: string) {
  //   return await this.roleRepository.findById(id);
  // }

  // async create(currentUser: UserDto, createRoleDto: CreateRoleDto) {
  //   const existingRole = await this.roleRepository.findByName(
  //     createRoleDto.Name,
  //   );
  //   if (existingRole)
  //     throw new HttpException('Role already exists!', HttpStatus.CONFLICT);

  //   const newRole = this.roleRepository.create(createRoleDto);
  //   newRole.CreatedBy = currentUser.Id;
  //   newRole.TenantId = currentUser.TenantId;
  //   return await this.roleRepository.save(newRole);
  // }

  // async patch(currentUser: UserDto, id: string, attrs: Partial<Role>) {
  //   const role = await this.roleRepository.findById(id);
  //   if (!role) {
  //     throw new HttpException('Role does not exists!', HttpStatus.NOT_FOUND);
  //   }
  //   Object.assign(role, attrs);
  //   role.UpdatedBy = currentUser.Id;
  //   return this.roleRepository.save(role);
  // }

  // async remove(currentUser: UserDto, id: string) {
  //   const role = await this.roleRepository.findById(id);
  //   if (!role) {
  //     throw new HttpException('Role does not exists!', HttpStatus.NOT_FOUND);
  //   }
  //   role.DeletedBy = currentUser.Id;
  //   this.roleRepository.save(role);
  //   return this.roleRepository.softRemove(role);
  // }
}
