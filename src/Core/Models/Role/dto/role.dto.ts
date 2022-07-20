import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class RoleDto {
  @ApiProperty()
  @Expose()
  readonly Id: string;

  @ApiProperty()
  @Expose()
  readonly TenantId: string;

  @ApiProperty()
  @Expose()
  readonly Name: string;
}
