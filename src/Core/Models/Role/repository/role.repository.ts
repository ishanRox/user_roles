// import { EntityRepository, Repository } from 'typeorm';
// import { PageMetaDto } from '../../Page/dto/page-meta.dto';
// import { PageOptionsDto } from '../../Page/dto/page-options.dto';
// import { PageDto } from '../../Page/dto/page.dto';
// import { RoleDto } from '../dto/role.dto';
// import { Role } from '../entities/role.entity';

// @EntityRepository(Role)
// export class RoleRepository extends Repository<Role> {
//   async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<RoleDto>> {
//     const queryBuilder = this.createQueryBuilder('role');
//     queryBuilder
//       .orderBy('[role].createdAt', pageOptionsDto.order)
//       .skip(pageOptionsDto.skip)
//       .take(pageOptionsDto.take);
//     const itemCount = await queryBuilder.getCount();
//     const { entities } = await queryBuilder.getRawAndEntities();
//     const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
//     return new PageDto(entities, pageMetaDto);
//   }
//   async findByName(name: string): Promise<Role | undefined> {
//     console.log('Querying Role Repository [findByName]=' + name);
//     return await this.createQueryBuilder('role')
//       .where('role.Name = :name', { name })
//       .getOne();
//   }
//   async findById(id: string): Promise<Role | undefined> {
//     console.log('Querying Role Repository [findById]=' + id);
//     return await this.createQueryBuilder('role')
//       .where('role.Id = :id', { id })
//       .getOne();
//   }
// }
