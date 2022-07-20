import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserDto {
  @ApiProperty()
  @Expose()
  readonly Id: string;

  @ApiProperty()
  @Expose()
  readonly TenantId: string;

  @ApiProperty()
  @Expose()
  readonly UserName: string;

  @ApiProperty()
  @Expose()
  readonly Name: string;

  @ApiProperty()
  @Expose()
  readonly Surname: string;

  @ApiProperty()
  @Expose()
  readonly Email: string;
}
