// import { EntityRepository, Repository } from 'typeorm';
// import { PageMetaDto } from '../../Page/dto/page-meta.dto';
// import { PageOptionsDto } from '../../Page/dto/page-options.dto';
// import { PageDto } from '../../Page/dto/page.dto';
// import { UserDto } from '../dto/user.dto';
// import { User } from '../entities/user.entity';

// @EntityRepository(User)
// export class UserRepository extends Repository<User> {
//   async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<UserDto>> {
//     const queryBuilder = this.createQueryBuilder('user');
//     queryBuilder
//       .orderBy('[user].createdAt', pageOptionsDto.order)
//       .skip(pageOptionsDto.skip)
//       .take(pageOptionsDto.take);
//     const itemCount = await queryBuilder.getCount();
//     const { entities } = await queryBuilder.getRawAndEntities();
//     const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
//     return new PageDto(entities, pageMetaDto);
//   }
//   async findUser(userName: string): Promise<User | undefined> {
//     console.log('Querying User Repository [findUser]=' + userName);
//     return await this.createQueryBuilder('user')
//       .addSelect('user.PasswordHash')
//       .where('user.UserName = :userName', { userName })
//       .getOne();
//   }
//   async findByUserName(userName: string): Promise<User | undefined> {
//     console.log('Querying User Repository [findByUserName]=' + userName);
//     return await this.createQueryBuilder('user')
//       .where('user.UserName = :userName', { userName })
//       .getOne();
//   }
//   async findByName(name: string): Promise<User | undefined> {
//     console.log('Querying User Repository [findByName]=' + name);
//     return await this.createQueryBuilder('user')
//       .where('user.Name = :name', { name })
//       .getOne();
//   }
//   async findById(id: string): Promise<User | undefined> {
//     console.log('Querying User Repository [findById]=' + id);
//     return await this.createQueryBuilder('user')
//       .where('user.Id = :id', { id })
//       .getOne();
//   }
// }
