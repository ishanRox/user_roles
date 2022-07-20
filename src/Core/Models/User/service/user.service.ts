import { ForbiddenException, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { LoggerService } from 'src/Core/Logger/logger.service';
import { PageOptionsDto } from '../../Page/dto/page-options.dto';
import { PageDto } from '../../Page/dto/page.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserDto } from '../dto/user.dto';
import { User } from '../entities/user.entity';
// import { UserRepository } from '../repository/user.repository';
import * as bcrypt from 'bcrypt';
import { USER_REPOSITORY } from 'src/config/constants';

@Injectable()
export class UserService {
  constructor(
    // private userRepository: UserRepository,
    @Inject(USER_REPOSITORY)
    private usersRepository: typeof User,
    private logger: LoggerService,
  ) {
    this.logger.setContext('UserService');
    this.logger.log('UserService created');
  }

  // async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<UserDto>> {
  //   return await this.userRepository.findAll(pageOptionsDto);
  // }

  // async findUser(userName: string) {
  //   return await this.userRepository.findUser(userName);
  // }

  // async findByUserName(userName: string) {
  //   return await this.userRepository.findByUserName(userName);
  // }

  // async findById(id: string) {
  //   return await this.userRepository.findById(id);
  // }

  async create(currentUser: UserDto, createUserDto: CreateUserDto) {
    // console.log('Emitting new message into user queue');
    // this.client.emit('emit-user', {
    //   id: '1',
    //   name: 'test',
    //   date: new Date(),
    // });

    console.log(currentUser, createUserDto);

    // const existingUser = await this.userRepository.findByUserName(
    //   createUserDto.UserName,
    // );
    // if (existingUser)
    //   throw new HttpException('User already exists!', HttpStatus.CONFLICT);

    const newUser = await this.usersRepository.create<User>({ ...createUserDto });
    const secret = await this.hashPassword(createUserDto.Password);
    newUser.PasswordHash = secret.PasswordHash;
    // newUser.CreatedBy = currentUser.Id;
    // newUser.TenantId = currentUser.TenantId;
    // return await this.userRepository.save(newUser);
    return newUser;
  }

  // async patch(currentUser: UserDto, id: string, attrs: Partial<User>) {
  //   const user = await this.userRepository.findById(id);
  //   if (!user) {
  //     throw new HttpException('User does not exists!', HttpStatus.NOT_FOUND);
  //   }
  //   Object.assign(user, attrs);
  //   user.UpdatedBy = currentUser.Id;
  //   return this.userRepository.save(user);
  // }

  // async resetPassword(currentUser: UserDto, id: string, password: string) {
  //   const user = await this.userRepository.findById(id);
  //   if (!user) {
  //     throw new HttpException('User does not exists!', HttpStatus.NOT_FOUND);
  //   }
  //   const secret = await this.hashPassword(password);
  //   user.PasswordHash = secret.PasswordHash;
  //   user.UpdatedBy = currentUser.Id;
  //   return this.userRepository.save(user);
  // }

  // async remove(currentUser: UserDto, id: string) {
  //   const user = await this.userRepository.findById(id);
  //   if (!user) {
  //     throw new HttpException('User does not exists!', HttpStatus.NOT_FOUND);
  //   }
  //   user.DeletedBy = currentUser.Id;
  //   this.userRepository.save(user);
  //   return this.userRepository.softRemove(user);
  // }

  async hashPassword(password: string) {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(password, salt);
    return { PasswordHash: hash };
  }
  // async updateRefreshTokenHash(userId: string, rt: string) {
  //   const salt = await bcrypt.genSaltSync(10);
  //   const rtHash = await bcrypt.hash(rt, salt);

  //   const user = await this.userRepository.findById(userId);
  //   user.RefreshTokenHash = rtHash;
  //   const update = await this.userRepository.save(user);
  // }

  // async deleteRefreshTokenHash(userId: string): Promise<boolean> {
  //   const user = await this.userRepository.findById(userId);
  //   user.RefreshTokenHash = null;
  //   const update = await this.userRepository.save(user);
  //   return Boolean(update);
  // }

  // async refreshToken(userId: string, rt: string): Promise<boolean> {
  //   const user = await this.userRepository.findById(userId);
  //   if (!user.RefreshTokenHash) {
  //     throw new ForbiddenException('User already logout');
  //   }
  //   const rtCompared = await bcrypt.compare(rt, user.RefreshTokenHash);
  //   if (!rtCompared) {
  //     throw new ForbiddenException('Access Denied !');
  //   }

  //   return rtCompared;
  // }
}
